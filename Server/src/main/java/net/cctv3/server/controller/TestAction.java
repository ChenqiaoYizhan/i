package net.cctv3.server.controller;

import net.cctv3.server.entity.Shiti;
import net.cctv3.server.entity.Web;
import net.cctv3.server.mapper.ShitiMapper;
import net.cctv3.server.mapper.WebMapper;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
public class TestAction {
    @Autowired
    private ShitiMapper shitiMapper;

    @CrossOrigin
    @RequestMapping("/insertShiti.action")
    public String insertShiti() {
        // http://www.gzywtk.com/tmshow/26945.html MaxID = 26945
        for (int i = 1; i <= 26954; i++) {
            String web = String.format("http://www.gzywtk.com/tmshow/%d.html", i);
            System.out.println(String.format("%05d", i) + " / " + 26954);
            if (isStatus200(web)) {
                Document document = open(web);
                // System.out.println("Current web = " + web);
                Element mbox_bot = document.getElementsByClass("mbox_bot").first();
                String title = mbox_bot.getElementsByTag("h1").first().text();
                Element tmshowul = mbox_bot.getElementsByClass("tmshowul").first();
                Element li360 = tmshowul.getElementsByClass("li360").first();
                String group = li360.text();
                if (group.contains("考点详细：")) {
                    group = group.replace("考点详细：", "").trim();
                }
                group = group.split("－")[0];
                // System.out.println("Group Name = " + group);
                // System.out.println("Question Name = " + title.split("_")[0]);
                Elements lists = mbox_bot.getElementsByClass("list");
                String question = lists.get(1).getElementsByClass("content").first()
                        .getElementsByTag("p").first()
                        .html();
                String answer = lists.get(2).getElementsByClass("content").first()
                        .getElementsByTag("p").first()
                        .html();
                // System.out.println("Question = " + question);
                // System.out.println("Answer = " + answer);
                if(group.equals("现代文阅读") || group.equals("文言文") || group.equals("诗歌鉴赏")) {
                    Shiti shiti = new Shiti(group,
                            title.replace("诗歌鉴赏及答案", "")
                            .replace("阅读题及答案", "")
                            .replace("文言文翻译及试题答案", "")
                            .replace("_", " ")
                                    .replace("\\,", " ")
                            .trim(),
                            question, answer, 0, 0,
                            new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()),
                            0);
                    shitiMapper.insertShiti(shiti);
                    System.out.println(shiti.toString());
                }
                // System.out.println();
            }
        }
        return "";
    }

    private boolean isStatus200(String web) {
        boolean result = false;
        try {
            URL url = new URL(web);
            HttpURLConnection connection = ((HttpURLConnection) url.openConnection());
            result = connection.getResponseCode() == 200;
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }

    private Document open(String web) {
        Document document = null;
        try {
            document = Jsoup.connect(web).get();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return document;
    }
}
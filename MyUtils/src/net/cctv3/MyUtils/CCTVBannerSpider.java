package net.cctv3.MyUtils;

import com.google.gson.Gson;
import org.apache.commons.io.IOUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import javax.print.DocFlavor;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class CCTVBannerSpider {
    public static void main(String[] args) throws IOException {
        Document document = open();
        Elements pics = document.getElementsByClass("pic");
        int index = 0;
        List<Banner> list = new ArrayList<>();
        for(Element pic : pics) {
            index ++;
            // System.out.println(pic);
            String image = "https:" + pic.getElementsByTag("img").first().attr("src");
            // System.out.println(image);
            String title = pic.getElementsByClass("title").first().text();
            String message = pic.getElementsByClass("brief").first().text();
            System.out.println(image + "\n" + title + "\n" + message);
            File file = new File(index +".jpg");
            if(!file.exists()) {
                file.createNewFile();
                FileOutputStream fos = new FileOutputStream(file);
                IOUtils.copy(new URL(image).openStream(), fos);
                fos.flush();
                fos.close();
            }
            list.add(new Banner(index, title, message));
        }
        System.out.println(new Gson().toJson(list));
    }

    private static Document open() {
        Document document = null;
        try {
            document = Jsoup.parse(new File("New.html"), "utf-8");
        } catch (IOException e) {
            e.printStackTrace();
        }
        return document;
    }
}

class Banner {
    private int id;
    private String title;
    private String message;

    public Banner(int id, String title, String message) {
        this.id = id;
        this.title = title;
        this.message = message;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

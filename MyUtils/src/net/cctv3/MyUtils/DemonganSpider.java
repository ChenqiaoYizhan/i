package net.cctv3.MyUtils;

import com.google.gson.Gson;
import org.apache.commons.io.IOUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class DemonganSpider {
    // www.demongan.com 贴纸爬虫
    public static void main(String[] args) {
        texts();
    }

    private static boolean isNote(String text) {
        String black[] = new String[]{"邮箱", "诅咒", "q", "运行", "管理系统", "资料", "exe", "群主", "企鹅", "扣扣", "c", "vs", "视频", "黑暗", "代码", "源码", "游戏", "学长", "下载", "教练"};
        for (String s : black) {
            if (text.contains(s) || text.toLowerCase().contains(s)) {
                return false;
            }
        }
        return text.length() > 16;
    }

    private static void texts() {
        ArrayList<Note> notes = new ArrayList<>();
        int index = 0;
        for (int i = 1; i <= 58; i++) {
            try {
                Document document = open(i);
                Elements noteDivs = document.getElementsByClass("note");
                for (Element noteDiv : noteDivs) {
                    // System.out.println(noteDiv.text());
                    String header = noteDiv.getElementsByClass("nhead").first().text();
                    String message = noteDiv.getElementsByClass("nbody").first().text();
                    String title = noteDiv.getElementsByClass("username").first().text();
                    Pattern p = Pattern.compile("(第[\\d]{1,}条)[\\s]{1}(.*)");
                    Matcher m = p.matcher(header);
                    String id;
                    String time = "";
                    while (m.find()) {
                        time = m.group(2);
                    }
                    if (isNote(message)) {
                        index++;
                        System.out.println(new Gson().toJson(new Note(index + "", title, message, time, true)));
                        notes.add(new Note(index + "", title, message, time, true));
                    }
                }
                Thread.sleep(1);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        System.out.println(new Gson().toJson(notes));
    }

    private static Document open(int page) {
        Document document = null;
        try {
            document = Jsoup.connect(String.format("http://www.demongan.com/gbook/?20_%d.html", page)).get();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return document;
    }

    private static void images() {
        // http://www.demongan.com/images/a1_1.gif
        for (int i = 1; i <= 8; i++) {
            for (int j = 1; j <= 3; j++) {
                String url = String.format("http://www.demongan.com/images/a%d_%d.gif", i, j);
                System.out.println(url);
                try {
                    InputStream is = new URL(url).openStream();
                    File file = new File(String.format("Paster_%d_%d.gif", i, j));
                    if (!file.exists()) {
                        file.createNewFile();
                    }
                    FileOutputStream fos = new FileOutputStream(file);
                    IOUtils.copy(is, fos);
                    fos.flush();
                    fos.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}

class Note {
    private String id;
    private String title;
    private String message;
    private String time;
    private boolean show;

    public Note(String id, String title, String message, String time, boolean show) {
        this.id = id;
        this.title = title;
        this.message = message;
        this.time = time;
        this.show = show;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public boolean isShow() {
        return show;
    }

    public void setShow(boolean show) {
        this.show = show;
    }
}

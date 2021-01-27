package net.cctv3.MyUtils;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.File;
import java.io.IOException;

public class Area100Spider {
    public static void main(String[] args) {
        Document d = open();
        Elements sections = d.getElementsByTag("section");
        for(Element section : sections) {
                System.out.println(section.text());
        }
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

package net.cctv3.server.util;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.json.JSONArray;
import org.json.JSONObject;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

public class ZGPingshuSpider {
    private static int index = 0;

    public static void main(String[] args) {
        try {
            String jsonStrings = FileUtils.readFileToString(new File("ZGPingshu.json"), "utf-8");
            JSONArray array = new JSONArray(jsonStrings);
            for (int i = 0; i < array.length(); i++) {
                JSONObject jsonObject = array.getJSONObject(i);
                int n = jsonObject.getInt("n");
                int id = jsonObject.getInt("id");
                String name = jsonObject.getString("name");
                System.out.println(String.format("Downloading %s", jsonObject.getString("name")));
                for (int j = 1; j <= n; j++) {
                    index++;
                    String htmlUri = String.format("http://www.zgpingshu.com/play/%d/", id) + (j == 1 ? "" : j + ".html");
                    String mp3Uri = getMP3Uri(id, j);
                    String fileName = getFileName(htmlUri);
                    download(String.format("%03d", index) + "." + name + "." + fileName + ".mp3", mp3Uri);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static String getMP3Uri(int id, int j) {
        String result = "";
        try {
            URL url = new URL(String.format("http://m.zgpingshu.com/playdata/%d/", id) + (j == 1 ? "" : j + ".html"));
            List<String> lines = IOUtils.readLines(url.openStream(), "utf-8");
            StringBuilder builder = new StringBuilder();
            for (String s : lines) {
                builder.append(s);
            }
            JSONObject jsonObject = new JSONObject(builder.toString());
            result = jsonObject.getString("urlpath");
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return result.replace(".flv", ".mp3");
    }

    private static String getFileName(String htmlUri) {
        String result = "";
        try {
            Document document = Jsoup.connect(htmlUri).header("User-Agent", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1").get();
            Element title = document.getElementsByTag("head").first().getElementsByTag("title").first();
            result = title.text().replace("评书网", "").trim();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }

    private static void download(String fileName, String mp3Uri) {
        long start = System.currentTimeMillis();
        System.out.println("Downloading: ");
        System.out.println("File name: " + fileName);
        System.out.println("MP3 uri: " + mp3Uri);
        File file = new File(fileName);
        try {
            if (!file.exists()) {
                file.createNewFile();
            }
            FileOutputStream fos = new FileOutputStream(file);
            URL url = new URL(mp3Uri);
            IOUtils.copy(url.openStream(), fos);
            fos.flush();
            fos.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        long end = System.currentTimeMillis();
        System.out.println(String.format("Saved file used %d ms", (int) (end - start)));
    }
}
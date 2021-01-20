package net.cctv3.MyUtils;

import org.apache.commons.io.IOUtils;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

public class DemonganSpider {
    // www.demongan.com 贴纸爬虫
    public static void main(String[] args) {
        // http://www.demongan.com/images/a1_1.gif
        for(int i=1;i<=8;i++) {
            for(int j=1;j<=3;j++) {
                String url = String.format("http://www.demongan.com/images/a%d_%d.gif", i, j);
                System.out.println(url);
                try {
                    InputStream is = new URL(url).openStream();
                    File file = new File(String.format("Paster_%d_%d.gif", i, j));
                    if(!file.exists()) {
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

package net.cctv3.server.util;

import org.apache.tomcat.util.http.fileupload.IOUtils;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

public class BaijiahaoSpider {
    public static void main(String[] args) {
        // https://mbdp03.bdstatic.com/sdks/emoticon/img/face_99.png?r=2021021211
        // https://tb2.bdstatic.com/tb/editor/images/face/i_f25.png?t=20140803
        for (int i = 1; i <= 101; i++) {
            // 百家号 01-50
            // String imageSource = String.format("https://tb2.bdstatic.com/tb/editor/images/face/i_f%s.png?t=20140803", i < 10 ? ("0" + i) : i);
            // 贴吧 1-101
            String imageSource = String.format("https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK/tb/editor/images/client/image_emoticon%d.png", i);
            System.out.println(imageSource);
            try {
                InputStream is = new URL(imageSource).openStream();
                File file = new File(i + "@Baidu.png");
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

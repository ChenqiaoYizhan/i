<!--
 * @Descripttion: 
 * @version: 
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-19 16:23:05
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-19 17:00:05
-->
##前言

想下载一分资料，淘宝有人工代理下载的，一份一块钱，太贵了 -_- ||

于是乎，我右键F12有了新的发现，这个网站是把Pdf转成了一张张图片，也就意味着，我按照顺序把图片抓下来，再用代码把图片转成Pdf就可以了。

**PS: 暂时不打算做成在线版的，有需要的自己拿代码去本地跑吧 →_→**

###解析HTML

![](http://www.cctv3.net/images/LocalDoc88Cracker001.jpg)

###效果

![](http://www.cctv3.net/images/LocalDoc88Cracker002.jpg)

##撸

###PdfBox

一把来说，这些东西牛逼轰轰的`Apache`都有了稳定的库了，直接拿过来用就行了。

- 创建空的Pdf

``` java
private static String createPDF(Document document) {
    PDDocument pdf = null;
    String name = document.getElementsByClass("doc-title").first().getElementsByTag("h3").first().text();
    try {
        System.out.println("正在创建PDF: " + name + ".pdf");
        pdf = new PDDocument();
        pdf.save(new File(name + ".pdf"));
        System.out.println("PDF: " + name + ".pdf" + " " + "创建成功");
    } catch (IOException e) {
        e.printStackTrace();
    }
    return name;
}
```

- 打开刚才创建的Pdf，并且在循环里面添加新的Page

``` java
// 添加图片到Pdf里
private static long addImages2Pdf(String pdfName, List<String> images) {
    long start = System.currentTimeMillis();
    try {
        PDDocument pdf = new PDDocument().load(new File(pdfName + ".pdf"));
        for (String s : images) {
            PDPage page = new PDPage(PDRectangle.A4);
            PDImageXObject image = PDImageXObject.createFromFile(s, pdf);
            PDPageContentStream contents = new PDPageContentStream(pdf, page);
            contents.drawImage(image, 0, 0, PDRectangle.A4.getWidth(), PDRectangle.A4.getHeight());
            contents.close();
            pdf.addPage(page);
        }
        pdf.save(pdfName + ".pdf");
        pdf.close();
    } catch (IOException e) {
        e.printStackTrace();
    }
    long end = System.currentTimeMillis();
    return end - start;
}
```

###JSoup

`HTML`解析神器，至于怎么使用我就不啰嗦了。

``` java
// 提取里面的图片的url并且保存到本地
private static List<String> document2Images(Document document) {
    List<String> list = new ArrayList<String>();
    Elements pdfBoxs = document.getElementsByClass("pagebox");
    System.out.println("文档: " + pdfBoxs.size() + "页");
    int i = 0;
    for (Element pdfBox : pdfBoxs) {
        i++;
        System.out.println(String.format("正在保存第 %d 张图片: ", i));
        String url = pdfBox.getElementsByTag("img").first().attr("src");
        System.out.println(url);
        String name = System.currentTimeMillis() + ".gif";
        File file = new File(name);
        if (!file.exists()) {
            try {
                file.createNewFile();
                FileOutputStream fos = new FileOutputStream(file);
                IOUtils.copy(new URL(url).openStream(), fos);
                fos.flush();
                fos.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        System.out.println(String.format("第 %d 张图片保存完成: ", i));
        System.out.println(file.getAbsolutePath());
        list.add(name);
    }
    return list;
}
```
package net.cctv3.server.controller;

import net.cctv3.server.entity.Article;
import net.cctv3.server.entity.Discuss;
import net.cctv3.server.mapper.ArticleMapper;
import net.cctv3.server.mapper.DiscussMapper;
import net.cctv3.server.mapper.RelationshipMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.logging.Logger;

@RestController
public class DiscussAction {
    @Autowired
    ArticleMapper articleMapper;
    @Autowired
    RelationshipMapper relationshipMapper;
    @Autowired
    DiscussMapper discussMapper;
    @Autowired
    HttpServletRequest request;

    @CrossOrigin
    @PostMapping("/insertDiscuss.action")
    public HashMap<String, Object> insertDiscuss(@RequestBody Discuss discuss) {
        // System.out.println(request.getHeader("User-Agent"));
        discuss.userAgent = request.getHeader("User-Agent");
        discuss.ip = request.getRemoteAddr().equals("0:0:0:0:0:0:0:1") ? "127.0.0.1" : request.getRemoteAddr();
        // 防止客户端篡改时间
        discuss.time = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("status", 0);
        try {
            int rows = discussMapper.insertDiscuss(discuss);
            hashMap.put("status", rows);
        } catch (RuntimeException e) {
            e.printStackTrace();
            hashMap.put("message", e.getMessage());
        }
        return hashMap;
    }

    @CrossOrigin
    @RequestMapping("/selectDiscusses.action")
    public List<Discuss> selectDiscusses(@RequestParam("article") String article) {
        List<Discuss> list = new ArrayList<>();
        if (article.matches("\\d+")) {
            list = discussMapper.findDiscussesByArticle(Integer.parseInt(article));
        } else {
            // article 不是数字
        }
        return list;
    }
}
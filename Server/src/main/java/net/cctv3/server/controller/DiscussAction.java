package net.cctv3.server.controller;

import net.cctv3.server.entity.Article;
import net.cctv3.server.entity.Discuss;
import net.cctv3.server.entity.InsertArticle;
import net.cctv3.server.entity.Relationship;
import net.cctv3.server.mapper.ArticleMapper;
import net.cctv3.server.mapper.DiscussMapper;
import net.cctv3.server.mapper.RelationshipMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;
import sun.rmi.runtime.Log;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
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
    private HttpServletRequest request;

    @CrossOrigin
    @PostMapping("/insertDiscuss.action")
    public HashMap<String, Object> insertDiscuss(@RequestBody Discuss discuss) {
        // System.out.println(request.getHeader("User-Agent"));

        discuss.userAgent = request.getHeader("User-Agent");
        discuss.ip = request.getRemoteAddr().equals("0:0:0:0:0:0:0:1") ? "127.0.0.1" : request.getRemoteAddr();
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
        List<Discuss> list = discussMapper.findDiscussesByArticle(Integer.parseInt(article));
        return list;
    }
}
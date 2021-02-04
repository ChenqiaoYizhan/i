package net.cctv3.server.controller;

import net.cctv3.server.entity.Article;
import net.cctv3.server.entity.Discuss;
import net.cctv3.server.entity.InsertArticle;
import net.cctv3.server.entity.Relationship;
import net.cctv3.server.mapper.ArticleMapper;
import net.cctv3.server.mapper.RelationshipMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
public class DiscussAction {
    @Autowired
    ArticleMapper articleMapper;
    @Autowired
    RelationshipMapper relationshipMapper;

    @CrossOrigin
    @PostMapping("/insertDiscuss.action")
    public HashMap<String, Object> insertDiscuss(@RequestBody Discuss discuss) {
        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("status", 0);
        try {
            // int id = articleMapper.insertArticleOnly(ia.article);
            hashMap.put("status", 1);
        } catch (RuntimeException e) {
            e.printStackTrace();
            hashMap.put("message", e.getMessage());
        }
        return hashMap;
    }
}
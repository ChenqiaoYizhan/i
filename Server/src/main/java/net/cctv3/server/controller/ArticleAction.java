package net.cctv3.server.controller;

import net.cctv3.server.entity.InsertArticle;
import net.cctv3.server.entity.Relationship;
import net.cctv3.server.mapper.ArticleMapper;
import net.cctv3.server.mapper.RelationshipMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class ArticleAction {
    @Autowired
    ArticleMapper articleMapper;
    @Autowired
    RelationshipMapper relationshipMapper;

    @CrossOrigin
    @PostMapping("/insertArticle.action")
    public HashMap<String, Object> insertArticle(@RequestBody InsertArticle ia) {
        System.out.println(ia.article.toString());
        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("status", 0);
        try {
            // int id = articleMapper.insertArticleOnly(ia.article);
            articleMapper.insertArticleOnly(ia.article);
            int id = ia.article.id;
            hashMap.put("id", id);
            for (String s : ia.keys) {
                Relationship relationship = new Relationship(null, id, Integer.parseInt(s), ia.article.time, ia.article.deleted);
                relationshipMapper.insertRelationship(relationship);
            }
            hashMap.put("status", 1);
        } catch (RuntimeException e) {
            e.printStackTrace();
            hashMap.put("message", e.getMessage());
        }
        return hashMap;
    }
}
package net.cctv3.server.controller;

import net.cctv3.server.entity.Article;
import net.cctv3.server.entity.InsertArticle;
import net.cctv3.server.entity.Relationship;
import net.cctv3.server.entity.SelectArticleGroupByMonth;
import net.cctv3.server.mapper.ArticleMapper;
import net.cctv3.server.mapper.RelationshipMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class ArticleAction {
    private  final  static Logger logger = LoggerFactory.getLogger(ArticleAction.class);
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
                Relationship relationship = new Relationship(id, Integer.parseInt(s));
                relationshipMapper.insertRelationship(relationship);
            }
            hashMap.put("status", 1);
        } catch (RuntimeException e) {
            e.printStackTrace();
            hashMap.put("message", e.getMessage());
        }
        return hashMap;
    }

    @CrossOrigin
    @GetMapping("/selectArticle.action")
    public HashMap<String, Object> selectArticle(@RequestParam("id") String id) {
        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("status", 0);
        try {
            Article article = articleMapper.selectArticleByID(Integer.parseInt(id));
            List<Relationship> books = relationshipMapper.findRelationshipsByArticle(Integer.parseInt(id));
            hashMap.put("status", 1);
            hashMap.put("article", article);
            hashMap.put("books", books);
        } catch (RuntimeException e) {
            e.printStackTrace();
        }
        return hashMap;
    }

    @CrossOrigin
    @GetMapping("/selectArticlesGroupByMonth.action")
    public HashMap<String, Object> selectArticlesGroupByMonth(@RequestParam("deleted") String deleted) {
        HashMap<String, Object> hashMap = new HashMap<>();
        List<SelectArticleGroupByMonth> articles = articleMapper.selectArticlesGroupByMonth(Integer.parseInt(deleted));
        List<String> months = articleMapper.selectArticleMonths(Integer.parseInt(deleted));
        hashMap.put("articles", articles);
        hashMap.put("months", months);
        return hashMap;
    }

    @CrossOrigin
    @PostMapping("/updateArticle.action")
    public HashMap<String, Object> updateArticle(@RequestBody InsertArticle ia) {
        System.out.println(ia.article.toString());
        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("status", 0);
        try {
            // int id = articleMapper.insertArticleOnly(ia.article);
            articleMapper.updateArticle(ia.article);
            relationshipMapper.deleteRelationShipsByArticle(ia.article.id);
            for (String s : ia.keys) {
                Relationship relationship = new Relationship(ia.article.id, Integer.parseInt(s));
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
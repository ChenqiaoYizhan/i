package net.cctv3.server.controller;

import net.cctv3.server.entity.Article;
import net.cctv3.server.entity.InsertArticle;
import net.cctv3.server.entity.Relationship;
import net.cctv3.server.entity.SelectCount;
import net.cctv3.server.mapper.ArticleMapper;
import net.cctv3.server.mapper.CountMapper;
import net.cctv3.server.mapper.RelationshipMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
public class CountAction {
    @Autowired
    CountMapper countMapper;

    @CrossOrigin
    @GetMapping("/selectCount.action")
    public List<SelectCount> selectCount() {
        List<SelectCount> list = countMapper.selectCount();
        return list;
    }
}
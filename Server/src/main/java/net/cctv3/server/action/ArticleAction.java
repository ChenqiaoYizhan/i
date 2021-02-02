package net.cctv3.server.action;

import net.cctv3.server.entity.Article;
import net.cctv3.server.entity.Banner;
import net.cctv3.server.mapper.ArticleMapper;
import net.cctv3.server.mapper.BannerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ArticleAction {
    @Autowired
    private JdbcTemplate jdbc;
    @Autowired
    private ArticleMapper articleMapper;
    // Mybatis plus could not autowire. No beans of 'BaseMapper' type found

    @CrossOrigin
    @RequestMapping("/selectArticle.action")
    public List<Map<String, Object>> selectBanners(@RequestParam(value = "iid") String iid) {
        List<Map<String, Object>> list = new ArrayList<>();
        return list;
    }

    @CrossOrigin
    @PostMapping("/insertArticle.action")
    public HashMap<String, Object> insertBanner(@RequestBody Article article) {
        HashMap<String, Object> hashMap = new HashMap<>();
        int rows = articleMapper.insert(article);
        hashMap.put("status", rows);
        return hashMap;
    }
}
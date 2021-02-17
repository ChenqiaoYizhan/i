package net.cctv3.server.controller;

import net.cctv3.server.entity.*;
import net.cctv3.server.mapper.ArticleMapper;
import net.cctv3.server.mapper.CustomerMapper;
import net.cctv3.server.mapper.RelationshipMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
public class CustomerAction {
    private final static Logger logger = LoggerFactory.getLogger(CustomerAction.class);
    @Autowired
    CustomerMapper customerMapper;

    @CrossOrigin
    @RequestMapping("/selectCustomer.action")
    public HashMap<String, Object> insertArticle(@RequestParam("id") String id, @RequestParam("password") String password) {
        // System.out.println(ia.article.toString());
        HashMap<String, Object> hashMap = new HashMap<>();
        Customer customer = customerMapper.selectCustomer(id);
        hashMap.put("status", customer == null || !customer.password.equals(password) ? 0 : 1);
        return hashMap;
    }
}
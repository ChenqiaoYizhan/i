/*
 * @Descripttion: 
 * @version: 
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-02-01 01:18:39
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-03 21:25:25
 */
package net.cctv3.server.controller;

import net.cctv3.server.entity.Banner;
import net.cctv3.server.mapper.BannerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
public class BannerAction {
    @Autowired
    private JdbcTemplate jdbc;
    @Autowired
    private BannerMapper bannerMapper;

    @CrossOrigin
    @RequestMapping("/selectBanners.action")
    public List<Banner> selectBanners(@RequestParam(value = "deleted") String deleted) {
        return bannerMapper.findBannersByDeleted(deleted);
    }

    @CrossOrigin
    @PostMapping("/insertBanner.action")
    public HashMap<String, Object> insertBanner(@RequestBody Banner banner) {
        HashMap<String, Object> hashMap = new HashMap<>();
        return hashMap;
    }
}
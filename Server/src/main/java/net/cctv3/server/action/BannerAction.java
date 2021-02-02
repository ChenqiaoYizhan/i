package net.cctv3.server.action;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import net.cctv3.server.entity.Banner;
import net.cctv3.server.mapper.BannerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class BannerAction {
    @Autowired
    private JdbcTemplate jdbc;
    @Autowired
    private BannerMapper bannerMapper;
    // Mybatis plus could not autowire. No beans of 'BaseMapper' type found

    @CrossOrigin
    @RequestMapping("/selectBanners.action")
    public List<Map<String, Object>> selectBanners(@RequestParam(value = "useful") String useful) {
        String sql = String.format("select * from banner where useful = %s", useful);
        return jdbc.queryForList(sql);
    }

    @CrossOrigin
    @PostMapping("/insertBanner.action")
    public HashMap<String, Object> insertBanner(@RequestBody Banner banner) {
        HashMap<String, Object> hashMap = new HashMap<>();
        int rows = bannerMapper.insert(banner);
        hashMap.put("status", rows);
        return hashMap;
    }
}
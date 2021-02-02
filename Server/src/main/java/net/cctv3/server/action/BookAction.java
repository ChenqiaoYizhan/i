package net.cctv3.server.action;

import net.cctv3.server.entity.Banner;
import net.cctv3.server.entity.Book;
import net.cctv3.server.mapper.BannerMapper;
import net.cctv3.server.mapper.BookMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class BookAction {
    @Autowired
    private JdbcTemplate jdbc;
    @Autowired
    private BookMapper bookMapper;
    // Mybatis plus could not autowire. No beans of 'BaseMapper' type found

    @CrossOrigin
    @RequestMapping("/selectBooks.action")
    public List<Map<String, Object>> selectBanners(@RequestParam(value = "useful") String useful) {
        String sql = String.format("select * from book where useful = %s", useful);
        return jdbc.queryForList(sql);
    }

    @CrossOrigin
    @PostMapping("/insertBook.action")
    public HashMap<String, Object> insertBanner(@RequestBody Book book) {
        HashMap<String, Object> hashMap = new HashMap<>();
        int rows = bookMapper.insert(book);
        hashMap.put("status", rows);
        return hashMap;
    }
}
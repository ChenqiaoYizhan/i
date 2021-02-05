/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-02-02 12:36:57
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-02-03 21:25:58
 */
package net.cctv3.server.controller;

import net.cctv3.server.entity.Book;
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
    private BookMapper bookMapper;

    @CrossOrigin
    @RequestMapping("/selectBooks.action")
    public List<Book> selectBanners(@RequestParam("deleted") String deleted) {
        return bookMapper.findBooksByDeleted(deleted);
    }

    @CrossOrigin
    @PostMapping("/insertBooks.action")
    public HashMap<String, Object> insertBanner(@RequestBody Book book) {
        HashMap<String, Object> hashMap = new HashMap<>();
        return hashMap;
    }
}
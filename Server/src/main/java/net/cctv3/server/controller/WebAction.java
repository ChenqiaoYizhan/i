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
import net.cctv3.server.entity.Web;
import net.cctv3.server.mapper.BookMapper;
import net.cctv3.server.mapper.WebMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WebAction {
    @Autowired
    private WebMapper webMapper;

    @CrossOrigin
    @RequestMapping("/selectWebs.action")
    public List<Web> selectWebs(@RequestParam("deleted") String deleted) {
        return webMapper.findWebsByDeleted(Integer.parseInt(deleted));
    }
}
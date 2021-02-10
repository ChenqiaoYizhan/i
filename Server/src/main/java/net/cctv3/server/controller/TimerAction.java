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
import net.cctv3.server.entity.Timer;
import net.cctv3.server.mapper.BannerMapper;
import net.cctv3.server.mapper.TimerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
public class TimerAction {
    @Autowired
    private TimerMapper timerMapper;

    @CrossOrigin
    @RequestMapping("/selectTimers.action")
    public List<Timer> selectTimers(@RequestParam("deleted") String deleted) {
        return timerMapper.findTimersByDeleted(Integer.parseInt(deleted));
    }
}
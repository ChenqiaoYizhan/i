package net.cctv3.server.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

public class Article {
    @TableId(value = "id", type = IdType.AUTO)
    public Integer id;
    public String iid;
    public String name;
    public String title;
    public String message;
    public String image;
    public String html;
    public int look;
    public int love;
    public int useful;
    public String time;
}
package net.cctv3.server.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

public class BooksArticle {
    @TableId(value = "id", type = IdType.AUTO)
    public Integer id;
    public String iid;
    public int article;
    public int book;
    public int useful;
    public String time;
}
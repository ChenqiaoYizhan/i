package net.cctv3.server.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

public class Discuss {
    @TableId(value = "id", type = IdType.AUTO)
    public Integer id;
    public String iid;
    public int article;
    public int parent;
    public String qq;
    public String name;
    public String blog;
    public String ip;
    public String text;
    public String paint;
    public int useful;
    public String time;
}
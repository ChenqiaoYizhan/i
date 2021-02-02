package net.cctv3.server.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

public class Web {
    @TableId(value = "id", type = IdType.AUTO)
    public Integer id;
    public String iid;
    public int parent;
    public String title;
    public String message;
    public String url;
    public int useful;
    public String time;
}
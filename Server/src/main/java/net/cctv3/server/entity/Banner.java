package net.cctv3.server.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import org.springframework.data.annotation.AccessType;

public class Banner {
    @TableId(value = "id", type = IdType.AUTO)
    public Integer id;
    public String iid;
    public String name;
    public String title;
    public String message;
    public String image;
    public String video;
    public int useful;
    public String time;
}
package net.cctv3.server.entity;

import javax.persistence.*;

public class Article {
    public Integer id;
    public String name;
    public String title;
    public String message;
    public String image;
    public String html;
    public int nLook;
    public int nLove;
    public String timeCreate;
    public String timeUpdate;
    public int deleted;
}
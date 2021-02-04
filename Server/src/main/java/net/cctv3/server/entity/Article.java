package net.cctv3.server.entity;

import javax.persistence.*;

public class Article {
    public Integer id;
    public String name;
    public String title;
    public String message;
    public String image;
    public String html;
    public int look;
    public int love;
    public String time;
    public int deleted;

    @Override
    public String toString() {
        return "Article{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", title='" + title + '\'' +
                ", message='" + message + '\'' +
                ", image='" + image + '\'' +
                ", html='" + html + '\'' +
                ", look=" + look +
                ", love=" + love +
                ", time='" + time + '\'' +
                ", deleted=" + deleted +
                '}';
    }
}
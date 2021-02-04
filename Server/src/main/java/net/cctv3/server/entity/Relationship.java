package net.cctv3.server.entity;

public class Relationship {
    public Integer id;
    public int article;
    public int book;
    public String time;
    public int deleted;

    public Relationship(Integer id, int article, int book, String time, int deleted) {
        this.id = id;
        this.article = article;
        this.book = book;
        this.time = time;
        this.deleted = deleted;
    }
}
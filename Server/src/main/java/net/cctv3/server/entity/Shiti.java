package net.cctv3.server.entity;

public class Shiti {
    public int id;
    public String parent;
    public String name;
    public String question;
    public String answer;
    public int nLook;
    public int nLove;
    public String time;
    public int deleted;

    public Shiti() {
    }

    public Shiti(int id, String parent, String name, String question, String answer, int nLook, int nLove, String time, int deleted) {
        this.id = id;
        this.parent = parent;
        this.name = name;
        this.question = question;
        this.answer = answer;
        this.nLook = nLook;
        this.nLove = nLove;
        this.time = time;
        this.deleted = deleted;
    }

    public Shiti(String parent, String name, String question, String answer, int nLook, int nLove, String time, int deleted) {
        this.parent = parent;
        this.name = name;
        this.question = question;
        this.answer = answer;
        this.nLook = nLook;
        this.nLove = nLove;
        this.time = time;
        this.deleted = deleted;
    }

    @Override
    public String toString() {
        return "Shiti{" +
                "id=" + id +
                ", parent='" + parent + '\'' +
                ", name='" + name + '\'' +
                ", question='" + question + '\'' +
                ", answer='" + answer + '\'' +
                ", nLook=" + nLook +
                ", nLove=" + nLove +
                ", time='" + time + '\'' +
                ", deleted=" + deleted +
                '}';
    }
}
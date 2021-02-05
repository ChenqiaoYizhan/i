package net.cctv3.server.mapper;

import net.cctv3.server.entity.Article;
import net.cctv3.server.entity.Discuss;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface DiscussMapper {
    int insertDiscuss(Discuss discuss);
    List<Discuss> findDiscussesByArticle(int article);
}
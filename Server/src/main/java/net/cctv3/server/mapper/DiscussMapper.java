package net.cctv3.server.mapper;

import net.cctv3.server.entity.Article;
import net.cctv3.server.entity.Discuss;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DiscussMapper {
    int insertDiscuss(Discuss discuss);
}
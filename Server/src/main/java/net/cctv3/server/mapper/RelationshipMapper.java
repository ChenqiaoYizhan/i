package net.cctv3.server.mapper;

import net.cctv3.server.entity.Banner;
import net.cctv3.server.entity.Book;
import net.cctv3.server.entity.Relationship;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;

import java.util.List;

@Mapper
public interface RelationshipMapper {
    @Options(useGeneratedKeys = true)
    @Insert("insert into relationship (article, book, time, deleted) values (#{article}, #{book}, #{time}, #{deleted})")
    int insertRelationship(Relationship relationship);
}
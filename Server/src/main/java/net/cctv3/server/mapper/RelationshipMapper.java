package net.cctv3.server.mapper;

import net.cctv3.server.entity.Relationship;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface RelationshipMapper {
    @Options(useGeneratedKeys = true)
    @Insert("insert into relationship (article, book, time, deleted) values (#{article}, #{book}, #{time}, #{deleted})")
    int insertRelationship(Relationship relationship);

    @Select("select * from relationship where article = #{id} and deleted = 0")
    List<Relationship> findRelationshipsByArticle(int id);

    @Delete("update relationship set deleted = 1 where article = #{id}")
    int deleteRelationShipsByArticle(int id);
}
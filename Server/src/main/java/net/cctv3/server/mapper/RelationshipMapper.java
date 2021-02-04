package net.cctv3.server.mapper;

import net.cctv3.server.entity.Relationship;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface RelationshipMapper {
    @Options(useGeneratedKeys = true)
    @Insert("insert into relationship (article, book) values (#{article}, #{book})")
    int insertRelationship(Relationship relationship);

    @Select("select * from relationship where article = #{id}")
    List<Relationship> findRelationshipsByArticle(int id);

    @Delete("delete from relationship where article = #{id}")
    int deleteRelationShipsByArticle(int id);
}
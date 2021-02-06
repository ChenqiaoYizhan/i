package net.cctv3.server.mapper;

import net.cctv3.server.entity.Book;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface BookMapper {
    @Select("select * from book where deleted = #{deleted}")
    List<Book> findBooksByDeleted(String deleted);
}
package net.cctv3.server.mapper;

import net.cctv3.server.entity.Banner;
import net.cctv3.server.entity.Book;
import org.apache.ibatis.annotations.*;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Mapper
public interface BookMapper {
    @Select("select * from book where deleted = #{deleted}")
    List<Book> findBooksByDeleted(String deleted);

    @Options(useGeneratedKeys = true)
    @Insert("insert into book (name, title, message, time, deleted) values (#{name}, #{message}, #{time}, #{deleted})")
    int insertBook(Book book);
}
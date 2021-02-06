package net.cctv3.server.mapper;

import net.cctv3.server.entity.Book;
import net.cctv3.server.entity.Web;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface WebMapper {
    @Select("select * from web where deleted = #{deleted}")
    List<Web> findWebsByDeleted(int deleted);
}
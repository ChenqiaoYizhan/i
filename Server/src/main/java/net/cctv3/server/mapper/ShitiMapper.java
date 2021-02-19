package net.cctv3.server.mapper;

import net.cctv3.server.entity.Shiti;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface ShitiMapper {
    int insertShiti(Shiti shiti);
    @Select("select * from shiti where parent=#{parent} and deleted=#{deleted}")
    List<Shiti> findShitisByParent(String parent, int deleted);
}
package net.cctv3.server.mapper;

import net.cctv3.server.entity.Banner;
import net.cctv3.server.entity.SelectCount;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface CountMapper {
    List<SelectCount> selectCount();
}
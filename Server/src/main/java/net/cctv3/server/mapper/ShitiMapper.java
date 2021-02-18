package net.cctv3.server.mapper;

import net.cctv3.server.entity.Banner;
import net.cctv3.server.entity.Shiti;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface ShitiMapper {
    int insertShiti(Shiti shiti);
}
package net.cctv3.server.mapper;

import net.cctv3.server.entity.Banner;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface BannerMapper {
    @Select("select * from banner where deleted = #{deleted}")
    List<Banner> findBannersByDeleted(String deleted);
}
package net.cctv3.server.mapper;

import net.cctv3.server.entity.Banner;
import net.cctv3.server.entity.Timer;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface TimerMapper {
    @Select("select * from timer where deleted = #{deleted}")
    List<Timer> findTimersByDeleted(int deleted);
}
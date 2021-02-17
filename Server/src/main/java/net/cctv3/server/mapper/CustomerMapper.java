package net.cctv3.server.mapper;

import net.cctv3.server.entity.Customer;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface CustomerMapper {
    @Select("select * from customer where id = #{id}")
    Customer selectCustomer(String id);
}
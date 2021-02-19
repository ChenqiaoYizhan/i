package net.cctv3.server;

import net.cctv3.server.entity.Shiti;
import net.cctv3.server.mapper.ShitiMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class ServerApplicationTests {

    @Autowired
    private ShitiMapper shitiMapper;
    @Test
    void contextLoads() {
        findShitisByParent();
    }

    private void findShitisByParent() {
        List<Shiti> list = shitiMapper.findShitisByParent("现代文阅读", 0);
        System.out.println(list.size());
    }
}

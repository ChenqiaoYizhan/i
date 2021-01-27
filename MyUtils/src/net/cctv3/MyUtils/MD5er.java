package net.cctv3.MyUtils;

import org.apache.commons.codec.digest.DigestUtils;

public class MD5er {
    public static void main(String[] args) {
        System.out.println(DigestUtils.md5Hex("Sun Yupeng(year=2021&month=01&day=27)"));
    }
}

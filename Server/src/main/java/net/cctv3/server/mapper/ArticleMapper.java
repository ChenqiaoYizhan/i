package net.cctv3.server.mapper;

import net.cctv3.server.entity.Article;
import net.cctv3.server.entity.SelectArticleGroupByMonth;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;

import java.util.List;

@Mapper
public interface ArticleMapper {
    int insertArticleOnly(Article article);
    Article selectArticleByID(int id);
    int updateArticle(Article article);
    List<SelectArticleGroupByMonth> selectArticlesGroupByMonth(int deleted);
    List<String> selectArticleMonths(int deleted);
}
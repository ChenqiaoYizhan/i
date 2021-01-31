create table t_banner (
    br_id char(16) primary key not null,
    br_name text,
    br_title text,
    br_message text,
    br_image text,
    br_video text,
    br_time char(19)
);

create table t_books_article(
  tba_id varchar(16) primary key not null,
  tba_article varchar(16),
  tba_book varchar(16),
  tba_time char(19)
);

create table t_discuss (
    ds_id char(16) primary key not null,
    ds_qq varchar(16),
    ds_name varchar(32),
    ds_blog varchar(32),
    ds_ip varchar(32),
    ds_article varchar(16),
    ds_parent varchar(16),
    ds_text text,
    ds_paint text,
    ds_time char(19)
);

create table t_article (
    ae_id varchar(16) primary key not null,
    ae_name varchar(32) unique,
    ae_image text,
    ae_html text,
    ae_look int,
    ae_like int,
    ae_time char(19)
);

create table t_book (
    bk_id varchar(16) primary key not null,
    bk_name text,
    bk_message text,
    bk_time char(19)
);

create table t_web (
    wb_id varchar(16) primary key not null,
    wb_parent varchar(16),
    wb_title text,
    wb_message text,
    wb_url text,
    wb_time char(19)
);
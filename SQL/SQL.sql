use DB_i;
create table banner (
    id int auto_increment primary key not null,
    iid char(32) unique,
    name text,
    title text,
    message text,
    image text,
    video text,
    useful boolean,
    time char(19)
);

create table books_article(
  id int auto_increment primary key not null,
  iid char(32) unique,
  article varchar(16),
  book varchar(16),
  useful int,
  time char(19)
);

create table discuss (
    id int auto_increment primary key not null,
    iid char(32) unique,
    qq varchar(16),
    name varchar(32),
    blog varchar(32),
    ip varchar(32),
    article varchar(16),
    parent varchar(16),
    text text,
    paint text,
    useful int,
    time char(19)
);

create table article (
    id int auto_increment primary key not null,
    iid char(32) unique,
    name varchar(32) unique,
    image text,
    html text,
    look int,
    love int,
    useful int,
    time char(19)
);

create table book (
    id int auto_increment primary key not null,
    iid char(32) unique,
    name text,
   	message text,
   	useful int,
    time char(19)
);

create table web (
    id int auto_increment primary key not null,
    iid char(32) unique,
    parent varchar(16),
    title text,
    message text,
    url text,
    useful int,
    time char(19)
);
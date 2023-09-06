use my_db
select database()
--テーブル作成
create table people(
    id int primary key,
    name varchar(50),
    birth_day date default "1990-01-01"
);

insert into people values(1,"Taro","2001-01-01");

select * from people;




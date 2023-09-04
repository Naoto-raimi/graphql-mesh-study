-- --ユーザーの作成
-- CREATE USER docker;
-- CREATE ROLE docker WITH LOGIN PASSWORD :'docker';
-- --DBの作成
-- CREATE DATABASE docker;
-- --ユーザーにDBの権限をまとめて付与
-- GRANT ALL PRIVILEGES ON DATABASE docker TO docker;
-- ALTER ROLE docker SET search_path TO public;

-- --ユーザーを切り替え
-- \c docker

--テーブルを作成
CREATE TABLE fridge_stock (
  id integer PRIMARY KEY, 
  name varchar(30) NOT NULL,
  number integer NOT NULL,
  created_on TIMESTAMP NOT NULL
);
--テーブルにデータを挿入
INSERT INTO fridge_stock VALUES (1,'Tomato', 2, current_timestamp);
INSERT INTO fridge_stock VALUES (2,'Humberger', 3, current_timestamp);
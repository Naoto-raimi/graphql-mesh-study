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
CREATE TABLE cart (
    id serial primary key,
    item_name varchar(60),
    price money
);

CREATE TABLE products (
    id serial PRIMARY KEY,
    image_url VARCHAR(60),
    item_name varchar(60),
    item_description varchar(240),
    price money
);

CREATE TABLE users (
    id serial PRIMARY KEY,
    authid VARCHAR(40),
    user_name VARCHAR(40)
);
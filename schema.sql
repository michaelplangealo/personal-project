CREATE TABLE users (
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

CREATE TABLE cart (
    id serial PRIMARY key,
    product_id INTEGER REFERENCES products(id),
    user_id INTEGER REFERENCES users(id)
);
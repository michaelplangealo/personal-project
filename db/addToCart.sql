INSERT INTO cart (item_name, user_id) VALUES ($1, $2);
SELECT * FROM products
JOIN cart ON products.item_name = cart.product_id
WHERE user_id = $1;

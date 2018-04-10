INSERT INTO users (user_name, password) VALUES ($1, $2);
SELECT * FROM users WHERE user_name = $1;

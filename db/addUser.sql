INSERT INTO users (user_name, password) VALUES ($1, $2);
SELECT * FROM users WHERE authid = $1;

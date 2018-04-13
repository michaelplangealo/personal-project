UPDATE users 
SET shipping_firstname = $2, 
shipping_lastname = $3, 
shipping_address = $4, 
shipping_city = $5, 
shipping_state = $6, 
shipping_zipcode = $7,
email = $8,
tele = $9
WHERE user_id = $1

RETURNING *
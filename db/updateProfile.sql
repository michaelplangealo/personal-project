UPDATE users
  SET user_name = $1,
  shipping_name = $2,
  shipping_address = $3,
  shipping_aptnum = $4,
  shipping_city = $5,
  shipping_state = $6,
  shipping_zipcode = $7,
  tele = $8
  WHERE user_id = $9;
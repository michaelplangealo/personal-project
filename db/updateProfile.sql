UPDATE users
  SET user_name = $1,
  shipping_firstname = $2,
  shipping_lastname = $3,
  shipping_address = $4,
  shipping_aptnum = $5,
  shipping_city = $6,
  shipping_state = $7,
  shipping_zipcode = $8,
  tele = $9
  WHERE user_name = $10;
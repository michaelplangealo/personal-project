const addToCart = (req, res) => {
  req.session.cart = req.body
  res.status(200).json(req.session.cart)
  console.log(req.session.cart)
};

module.exports = {
  addToCart 
}

// updateCart: function(req, res) {
//   var product = req.body;
//     db.update_cart([product.user_id, product.product_id, product.quantity, product.purchase_date], function(err, cart) {
//       if (err) console.log(err);
//       else res.status(200).send(cart);
//     })
// }

  // req.app
  // .get("db")
  // .addToCart([req.user.id, req.params.id])
  // .then(response => res.status(200).json(response))
  // .catch(err => res.status(500).json(err));
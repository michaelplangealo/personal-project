module.exports = {
  addToCart: (req, res) => {
    if(!req.session.cart){
      req.session.cart = [];
      req.session.cart.push(req.body);
    } else {
      req.session.cart.push(req.body);
    }
    res.status(200).json(req.session.cart);
  },

  getCart: (req, res) => {
    if (!req.session.cart){
      req.session.cart = [];
      res.status(200).json(req.session.cart);
    } else {
      res.status(200).json(req.session.cart);
    }
  },

  deleteFromCart: (req, res) => {
    const {id} = req.params;
    const {cart} = req.session;

    const i = cart.findIndex((item) => item.id);
    cart.splice(i, 1);
    res.status(200).json(req.session)
  }
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
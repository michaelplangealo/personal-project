module.exports = {
  register: (req, res) => {
    const dbInstance = req.app.get("db");
    const bcrypt = req.app.get("bcrypt");
    const { username, password } = req.body;
    const saltRounds = 10;
    console.log("this is the username right here:", username, password);

    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        dbInstance
          .addUser(username, hash) 
          .then(response => {
            req.session.user = response[0]
            res.status(200).json(response)})
          .catch(err => console.log(err))
      })
    })
  },

  login: (req, res) => {
    const dbInstance = req.app.get("db");
    const bcrypt = req.app.get("bcrypt");
    const { username, password } = req.body;

    dbInstance
      .getUser(username)
      .then(response => {
          console.log(response)
        if (response.length > 0) {
          var hash = response[0].password
          bcrypt.compare(password, hash).then(function(answer) {
            if (answer == true) {
              req.session.user = response[0]
              res.status(200).send(response[0])
            } else if (answer == false) {
              res.status(200).send("BADPW")
            }
          })
        } else if (response.length < 1) {
          res.status(200).send("UnknownUser")
        }
      })
      .catch(err => console.log(err))
  },

  getShippingInfo: (req, res) => {
    const dbInstance = req.app.get("db");
    console.log(req.body);
    const {id, firstName, lastName, address, city, state, postal, email, phone } = req.body;

    dbInstance
      .updateProfile(firstName, lastName, address, city, state, postal, email, phone, id)
      .then(response => res.status(200).json(response))
      .catch(err => console.log(err))
  },

  getUser: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .getProducts()
      .then(response => res.status(200).json(response))
      .catch(() => res.status(500).json(err))
  }
}
const accountCreation = (req, res) => {
  const dbInstance = req.app.get("db")
  const bcrypt = req.app.get("bcrypt")
  const { username, password } = req.body
  const saltRounds = 10

  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      dbInstance
        .addUser(username, hash) //* check this out
        .then(response => res.status(200).json(response))
    })
  })
}

const passwordChecker = (req, res) => {
  const dbInstance = req.app.get("db")
  const bcrypt = req.app.get("bcrypt")
  const { username, password } = req.body

  dbInstance
    .getUser(username) //* check this out
    .then(response => {
        console.log(response)
      if (response.length > 0) {
        var hash = response[0].password
        bcrypt.compare(password, hash).then(function(answer) {
          if (answer == true) {
            // req.session.user = response[0]
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
}

module.exports = {
  accountCreation,
  passwordChecker
}
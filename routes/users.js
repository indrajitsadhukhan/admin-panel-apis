const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const phone = Number(req.body.phone);
  const password = req.body.password;
  const coins = Number(req.body.coins);
  const refercode = req.body.refercode;
  const referredby = req.body.referredby;
  const name = req.body.name;

  const newUser = new User({
    phone,
    password,
    coins,
    refercode,
    referredby,
    name,
  });
  newUser
    .save()
    .then(() => res.json("Users Added!"))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;

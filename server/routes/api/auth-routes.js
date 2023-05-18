const router = require("express").Router();

const {
  login,
  callBack
} = require('../../controllers/auth-controller');

router.route("/auth/twitter").get(login);
router.route("/auth/twitter/callback").get(callBack);

module.exports = router;
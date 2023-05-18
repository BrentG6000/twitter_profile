const router = require("express").Router();

const {
  getUser,
  sendTweet
} = require('../../controllers/user-controller');

router.route("/profile").get(getUser);
router.route("/tweet").post(sendTweet);

module.exports = router;
const router = require("express").Router();
const {
  createUser,
  signoutUser,
  deleteUser,
  authenticateLogin,
  authenticateStatus,
  changePassword
} = require('../../controllers/user-controller');

module.exports = router;
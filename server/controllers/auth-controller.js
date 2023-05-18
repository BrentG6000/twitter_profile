const { passport } = require('../server');

const login = (req, res) => {
  try{
    passport.authenticate('twitter');
  } catch {
    res.status(500).json({ message: "Failed to Login." });
  }
}

const callBack = (req, res) => {
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
      const environment = process.env.Node_ENV;
      if (environment === 'production') {
        res.redirect('https://brentg123-twitter-project.herokuapp.com/Profile');
      }
      else {
        res.redirect('http://localhost:3000/Profile');
      }
  }
}

module.exports = {
  login,
  callBack
};
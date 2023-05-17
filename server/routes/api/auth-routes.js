app.get('/auth/twitter', passport.authenticate('twitter'))

app.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
      //res.redirect('http://localhost:3000/Profile')
      res.redirect('https://brentg123-twitter-project.herokuapp.com/Profile')
  })
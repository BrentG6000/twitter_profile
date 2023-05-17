const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;

app.get('/auth/twitter', passport.authenticate('twitter'))
app.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
      //res.redirect('http://localhost:3000/Profile')
      res.redirect('https://brentg123-twitter-project.herokuapp.com/Profile')
  })
app.get('/user', (req, res) => {
    res.send(user)
})
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.post('/tweet', (req, res) => {
  res.sendStatus(200)
  const tweet = req.body.tweet
  
  if (tweet.length == 0) {
    console.error('Text field is empty - there is nothing to tweet!')
  }
  else if (tweet.length > 280) {
    console.error('There are too many characters in your tweet - cannnot post message!')
  }
  else {
    client.post('statuses/update', { status: req.body.tweet }).then(result => 
      {console.log('You successfully tweeted this : "' + result.text + '"')})
      .catch(console.error)
  }
}
)

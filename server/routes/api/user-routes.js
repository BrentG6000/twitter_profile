app.get('/user', (req, res) => {
  res.send(user)
})

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
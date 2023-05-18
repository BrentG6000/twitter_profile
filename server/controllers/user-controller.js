const { user, client } = require('../server');

const getUser = (req, res) => {
  if (user != {}) {
      res.status(200).json(user);
  }
  else {
    res.status(400).json({ message: "User not found."})
  }
}

const sendTweet = async (req, res) => {
  const tweet = req.body.tweet;

  try{
    if (tweet.length == 0) {
      res.status(401).json({ message: "Text field is empty. Please write something to tweet."});
    }
    // need to check if user has Twitter Blue. If so, max limit should be 4000 characters
    else if (tweet.length > 280) {
      res.status(401).json({ message: "There are too many characters in your tweet. Cannnot post message." })
    }
    else {
      const result = await client.post('statuses/update', { status: req.body.tweet });
      res.status(200).json({ message: `You successfully tweeted this : ${result.text}` });
    }
  } catch {
    res.status(500).json({ message: "Failed to send tweet." });
  }
}

module.exports = {
  getUser,
  sendTweet
};
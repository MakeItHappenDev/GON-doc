import tweets from '../data/tweets.json'
import authors from '../data/authors.json'

//Tweets
const populateTweet = tweet => {
  return {
    id:tweet.id,
    text:tweet.text,
    author:getAuthorById.bind(this, tweet.author)
  }
}
const fetchAllTweets = () => {
  return tweets.map(populateTweet)
}

const getTweetsByAuthor = id => {
  return tweets.filter(t => t.author === id).map(populateTweet)
}


//Authors
const getAuthorById = id => {
  return populateAuthor(authors.find(a => id === a.id))
}
const populateAuthor = author => {
  return {
    id:author.id,
    name:author.name,
    tweets:getTweetsByAuthor.bind(this, author.id)
  }
}



export default {
  tweets: () => fetchAllTweets()
}


import tweets from '../data/tweets.json'
import authors from '../data/authors.json'

const immutable = JSON.parse(JSON.stringify({tweets,authors}))

immutable.tweets.forEach(tweet => {

  tweet.author = immutable.authors.find(a => a.id === tweet.author)

  tweet.author.tweet ? tweet.author.tweet.push(tweet) : tweet.author.tweets = [tweet]

});


export default {
  tweets: () => immutable.tweets
}
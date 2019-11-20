import data from '../../graphql/nest'
import GON from '../../graphql/gon'

export default async (req, res) => {


const tweets = data.tweets
const json = {data:{tweets:[]},refs:{tweetsById:{},authorsById:{}}}

  data.authors.forEach(author => {
    json.refs.authorsById[author.id] = author
    author.tweets = author.tweets.map(t => `$refs.tweetsById.${t.id}`)
  })
  tweets.forEach(tweet => {
    json.refs.tweetsById[tweet.id] = tweet
    json.data.tweets.push(`$refs.tweetsById.${tweet.id}`)
    tweet.author = `refs.authorsById.${tweet.author.id}`
  });

  return res.json(json);
};
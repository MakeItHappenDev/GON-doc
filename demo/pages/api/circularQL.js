import data from '../../graphql/graph'

export default async (req, res) => {


/*const tweets = data.tweets
const json = {data:{tweets:[],authors:[]},refs:{tweetsById:{},authorsById:{}}}

  data.authors.forEach(author => {
    json.refs.authorsById[author.id] = author
    json.data.authors.push(`$refs.authorsById.${author.id}`)
    author.tweets = author.tweets.map(t => `$refs.tweetsById.${t.id}`)
  })
  tweets.forEach(tweet => {
    json.refs.tweetsById[tweet.id] = tweet
    json.data.tweets.push(`$refs.tweetsById.${tweet.id}`)
    tweet.author = `refs.authorsById.${tweet.author.id}`
  }); */
try{
    return res.json(data);
}
catch(e){
    return res.end(e.toString())
}
};
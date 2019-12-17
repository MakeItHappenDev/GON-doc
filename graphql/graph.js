const tweets = require('../data/tweets.json')
const authors = require('../data/authors.json')

tweets.forEach(t=>{
    t.author = authors.find(a => t.author === a.id)
    t.author.tweets ? t.author.tweets.push(t) : t.author.tweets = [t]
})


module.exports = {
  tweets,
  authors
}
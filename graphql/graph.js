const tweets = require('../data/tweets.json')
const authors = require('../data/authors.json')

const immutable = JSON.parse(JSON.stringify({tweets,authors}))


immutable.tweets.forEach(t=>{
    t.author = immutable.authors.find(a => t.author === a.id)
    t.author.tweets ? t.author.tweets.push(t) : t.author.tweets = [t]
})


module.exports = immutable
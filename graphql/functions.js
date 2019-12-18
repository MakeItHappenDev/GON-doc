const tweets = require('../data/tweets.json')
const authors = require('../data/authors.json')

//Tweets

const populateTweet = tweet => {
    return {
        id:tweet.id,
        text:tweet.text,
        author:getAuthorById.bind(this, tweet.author)
    }
}

const getTweetsByAuthor = id => {
    return tweets.filter(t => t.author === id).map(populateTweet)
}

const fetchAllTweets = () => {
    return tweets.map(populateTweet)
}


// Authors

const populateAuthor = author => {
    return {
        id:author.id,
        name:author.name,
        tweets:getTweetsByAuthor.bind(this, author.id || [])
    }
}

const getAuthorById = id => {
   return populateAuthor(authors.find(a => a.id === id))
}

const fetchAllAuthors = () => {
    return authors.map(populateAuthor)
}



module.exports = {
    fetchAllTweets,
    fetchAllAuthors
}
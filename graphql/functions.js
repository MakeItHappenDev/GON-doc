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

const getTweetsByIds = ids => {
    return tweets.filter(t => ids.includes(t.id)).map(populateTweet)
}

const fetchAllTweets = () => {
    return tweets.map(populateTweet)
}


// Authors

const populateAuthor = author => {
    return {
        id:author.id,
        name:author.name,
        tweets:getTweetsByIds.bind(this, author.tweets || [])
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
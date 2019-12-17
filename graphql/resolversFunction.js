import nest from './functions'

const root = { 
  hello: () => "Hello Boys",
  tweets: () => nest.fetchAllTweets(),
  authors: () => nest.fetchAllAuthors()
};

module.exports = root
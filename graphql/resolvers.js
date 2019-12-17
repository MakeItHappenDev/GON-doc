import data from './graph'

const root = { 
  hello: () => "Hello Boys",
  tweets: () => data.tweets,
  authors: () => data.authors
};

module.exports = root
import data from './nest'

const root = { 
  hello: () => "Hello Boys",
  tweets: () => data.tweets,
  authors: () => data.authors
};

module.exports = root
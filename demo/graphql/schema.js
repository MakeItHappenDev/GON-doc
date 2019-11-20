module.exports = `
type Tweet {
  id:ID!
  text:String!
  author:Author!
}

type Author {
  id:ID!
  name:String!
  tweets:[Tweet!]!
}

type Query {
    tweets:[Tweet!]!
    authors:[Author!]!
}
`
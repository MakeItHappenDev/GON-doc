import { graphql, buildSchema } from "graphql";

import data from '../../data/graphDB.js'
import schema from '../../graphql/schema'
const buildedSchema = buildSchema(schema)

const resolvers = {
  hello: () => "Hello Boys",
  tweets: () => Object.values(data.tweetsById),
  authors: () => Object.values(data.authorsById)
}


export default async (_, res) => {
  const query = `{
  authors{
    id
    name
    tweets{
      id
      text
      author{
        id
        name
      }
    }
  }
}`;
  const response = await graphql(buildedSchema, query, resolvers);

  return res.json(response);
};
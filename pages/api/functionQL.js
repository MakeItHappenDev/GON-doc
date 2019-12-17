import { graphql, buildSchema } from "graphql";

import schema from '../../graphql/schema'
import resolvers from '../../graphql/resolversFunction'

const buildedSchema = buildSchema(schema)


export default async (_, res) => {
  const query = `{
  tweets{
    id
    text
    author{
      id
      name
    }  
  }
  authors{
    id
    name
    tweets{
      id
      text
    }
  }
}`;
  const response = await graphql(buildedSchema, query, resolvers);

  return res.json(response);
};
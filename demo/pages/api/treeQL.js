import { graphql, buildSchema } from "graphql";

import schema from '../../graphql/schema'
import resolvers from '../../graphql/resolvers'

const buildedSchema = buildSchema(schema)


export default async (req, res) => {
  const query = `{
  tweets{
    text
    author{
      id
      name
      tweets{
        text
      }
    }  
  }
}`;
  const response = await graphql(buildedSchema, query, resolvers);

  return res.json(response);
};
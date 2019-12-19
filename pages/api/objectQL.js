import { graphql, buildSchema } from 'graphql'

import schema from '../../graphql/schema'
import resolver from '../../graphql/resolverObject'

const buildedSchema = buildSchema(schema)
const query = `{
  tweets{
    id
    text
    author{
      id
      name
      hello
      tweets{
        id
        text
      }
    }
  }
}`

export default async (_,res) => {

  const response = await graphql(buildedSchema, query, resolver)

  return res.json(response)
}
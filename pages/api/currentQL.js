import data from '../../graphql/graph'
//import GON from '../../graphql/gon'
import GON from 'graph-object-notation'

export default async (req, res) => {

  const gon  = GON.stringify(data)

  return res.end(gon, null, 1);
};
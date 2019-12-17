import data from '../../graphql/graph'
import GON from '../../graphql/gon'

export default async (req, res) => {

  const json = GON.serialize(data)

  return res.json(json);
};
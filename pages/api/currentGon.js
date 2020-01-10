import mutableDB from '../../data/mutableDB'
import {stringify} from 'graph-object-notation'

export default async (_,res) => {

  const response = stringify(mutableDB,null,1)

  return res.end(response,null,1)
}
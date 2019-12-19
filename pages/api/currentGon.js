import mutableDB from '../../data/mutableDB'
import {stringify} from 'graph-object-notation'

export default async (_,res) => {

  const response = stringify(mutableDB)

  return res.end(response,null,1)
}
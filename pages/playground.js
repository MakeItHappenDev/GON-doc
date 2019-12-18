import React, {useState} from 'react'
import GON from 'graph-object-notation'

import Centered from '../layout/centered'
import styles from './playground.module.scss'

export default () => {

  const defaultGONString = `{
    "primitive":"hello world",
    "date":|2019-12-18T12:00:00.000Z|,
    "bigInt":42n,
    "symbol":±test±,
    "foo":{"name":"Arthur"},
    "bar":{"name":"Arthur2", "link":@foo@},
    "list":["test",@foo@,@bar@,@wrong.path@],
    "reference":@foo@,
    "refList":@list@,
    "fakeRef":{"name":"Arthur"}
}`

  const [string,setString] = useState(defaultGONString)

  let parsedGon
  try{
    parsedGon = GON.parse(string)
  }
  catch(e){
    parsedGon = {error:e.toString()}
  }

  let stringifiedJson
  try {
    stringifiedJson = JSON.stringify(parsedGon, null, 1)
    
  } catch (error) {
    stringifiedJson = error.toString()
  }

  //Stringification should never fail
  let stringifiedGon = GON.stringify(parsedGon,null,1)



  return(
    <Centered>
      <article className={styles.playground}>
        <h1>GON string</h1>
        <textarea value={string} onChange={e=>setString(e.target.value)} />
        <h1>JSON stringified object</h1>
        <pre>{stringifiedJson}</pre>
        <h1>GON stringified object</h1>
        <pre>{stringifiedGon}</pre>
      </article>
    </Centered>
  )
}
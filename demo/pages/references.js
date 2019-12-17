import React, {useState} from 'react'
import GON from '../lib/index'

import styles from './references.module.scss'


export default () => {

  const defaultString = `{
    "primitive":"hello",
    "date":|2019-12-17T12:00:00.000Z|,
    "boolean":true,
    "bigInt":42n,
    "symbol":±test±,
    "foo":{"name":"Arthur","link":@bar@},
    "bar":{"name":"Arthur2"},
    "list":["test","hello", @wrong.path.name@],
    "ref":@foo@,
    "refList":@list@,
    "fakeRef":{"name":"Arthur"}
  }`

  const [string,setString] = useState(defaultString)

  //Can fail if malformed
  let parsedString
  try{
    parsedString = GON.parse(string)
  }
  catch(e){
    parsedString = {error:e.toString()}
  }

  //Can fail if circular
  let JSONString
  try{
    JSONString = JSON.stringify(parsedString, null, 1)
  }
  catch(error){
    JSONString = error.toString()
  }

  //should never fail
  let data = GON.stringify(parsedString,null,1)



  return (
    <main className={styles.main}>
      <h1>Hello dev.to</h1>
      <p>
        <a href="https://github.com/MakeItHappenDev/GraphObjectNotation/blob/master/demo/pages/references.js" target="_blank" rel="noopener noreferrer">Here's the code</a>
      </p>
      <p>
        <a href="https://dev.to/arthurbiensur/kind-of-getting-the-memory-address-of-a-javascript-object-2mnd" target="_blank" rel="noopener noreferrer">Here is a Post about this page</a>
      </p>
      <p>GON orinigal string : </p>
      <textarea value={string} onChange={e=>setString(e.target.value)}/>
      <button onClick={()=>setString(defaultString)}>Reset</button>
      <p>JSON stringify :</p>
      <pre>{JSONString}</pre>
      <p>Gon stringify</p>
      <pre>{data}</pre>
    </main>
  )
}
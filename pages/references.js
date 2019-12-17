import React, {useState} from 'react'
import GON from 'graph-object-notation'

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
        <h1>Graph Object Notation Playground</h1>
        <p>
          <a href="https://github.com/MakeItHappenDev/GON-doc/blob/master/pages/references.js" target="_blank" rel="noopener noreferrer">Here's the code</a>
        </p>
        <p>
          <a href="https://dev.to/arthurbiensur/kind-of-getting-the-memory-address-of-a-javascript-object-2mnd" target="_blank" rel="noopener noreferrer">Here is a Post about this page</a>
        </p>
        <h2>GON orinigal string : <button onClick={()=>setString(defaultString)}>Reset</button></h2>
        <textarea value={string} onChange={e=>setString(e.target.value)}/>
        
        <h2>JSON stringify :</h2>
        <pre>{JSONString}</pre>
        <h2>GON stringify</h2>
        <pre>{data}</pre>
      </main>
  )
}
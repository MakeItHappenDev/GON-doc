import React, {useState} from 'react'
import setup from '../lib/references'
import parse from '../lib/parse'
import createReferences from '../lib/createReferences'

import styles from './references.module.scss'


export default () => {

  const defaultString = `{
    "primitive":"hello",
    "foo":{"name":"Arthur","link":@bar@},
    "bar":{"name":"Arthur2"},
    "list":["test","hello", @wrong.path.name@],
    "ref":@foo@,
    "refList":@list@,
    "fakeRef":{"name":"Arthur"}
  }`

  const [string,setString] = useState(defaultString)

  let parsedString
  try{
    parsedString = parse(string)
  }
  catch(e){
    parsedString = {error:e.toString()}
  }


  let JSONString
  try{
    JSONString = JSON.stringify(parsedString, null, 1)
  }
  catch(error){
    JSONString = error.toString()
  }

  //Execute the referencification
  const init = setup({
    path:["references"]
    })
  const findRef = init("objects")

  let data = {}
  try{
    data = {
      data:createReferences(parsedString,findRef),
      references:init("references")
    }
  }
  catch(e){
    data:{error:e.toString()}
  }


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
      <p>JSON parsed string :</p>
      <pre>{JSONString}</pre>
      <p>Referenced object</p>
      <pre>{JSON.stringify(data,null,1)}</pre>
    </main>
  )
}
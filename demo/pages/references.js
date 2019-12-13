import Reference from '../lib/reference'
import setup from '../lib/references'
import parse from '../lib/parse'

import styles from './references.module.scss'


export default () => {

  const string = '{"primitive":"hello","foo":{"name":"Arthur"},"list":["test","hello", @nothing.wrong.path.name@],"ref":@foo@, "refList":@list@,"fakeRef":{"name":"Arthur"}}'
  const parsedString = parse(string)
  const JSONString = JSON.stringify(parsedString)

  //Execute the referencification
  const init = setup({
    path:["usedReferences"]
    })
  const findRef = init("objects")

  //Recusive call of findRef over our object
  const reference = (object) => {
    if (object instanceof Array) {
      for (let i = 0; i < object.length; i++) {
        //Don't go recursive for primitives
        if (typeof object[i] === "object" && object[i] !== null && !(object[i] instanceof Reference)) {
          //Go deeper
          reference(object[i])
          object[i] = findRef(object[i])
        }
      }
    } else if (object instanceof Object) {
      Object.keys(object).forEach(function(key) {
        if (object[key] && typeof object[key] === "object" && !(object[key] instanceof Reference)) {
          //Go deeper
          reference(object[key])
          object[key] = findRef(object[key])
        }
      });
    }
    return object;
  };


  const data = {
    data:reference(parsedString),
    usedReferences:init("references")
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
      <pre>{`${string}`}</pre>
      <p>parsed string :</p>
      <pre>{JSONString}</pre>
      <p>Referenced object</p>
      <pre>{JSON.stringify(data,null,1)}</pre>
    </main>
  )
}
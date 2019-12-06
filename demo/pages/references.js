import setup from '../lib/references'

import styles from './references.module.scss'

export default () => {

  const user1 = {name:"Arthur"}
  const user2 = {name:"Bob"}

  const people = [
    user1,
    {name:"Arthur"},
    {name:"Catherine"},
    {name:"Joe"},
    user1
    ]

  const preloadedRefs = {
    superUser:user1,
    notUsed:user2
    }


  //Execute the referencification
  const init = setup({
    references: preloadedRefs,
    addressLength:8,
    path:["usedReferences"]
    })
  const findRef = init("objects")
  const data = {
    people:people.map(p=>findRef(p)),
    usedReferences:init("references"),
    allReferences:init("allReferences")
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
      <pre>{`const user1 = {name:"Arthur"}
const user2 = {name:"Bob"}

const people = [
  user1,
  {name:"Arthur"},
  {name:"Catherine"},
  {name:"Joe"},
  user1
  ]

const preloadedRefs = {
  superUser:user1,
  notUsed:user2
  }


//Execute the referencification
const init = setup({
  references: preloadedRefs,
  addressLength:8,
  path:["usedReferences"]
  })
const findRef = init("objects")
const data = {
  people:people.map(p=>findRef(p)),
  usedReferences:init("references"),
  allReferences:init("allReferences")
  }`}</pre>
      <p>Data :</p>
      <pre>{JSON.stringify(data,null,1)}</pre>
    </main>
  )
}
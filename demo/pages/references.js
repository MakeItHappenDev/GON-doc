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
    bannedUser:user2,
    notUsed:{name:"Alice"}
    }


  //Execute the referencification
  const init = setup({
    references: preloadedRefs,
    addressLength:8,
    target:"usedReferences"
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
  bannedUser:user2,
  notUsed:{name:"Alice"}
  }


//Execute the referencification
const init = setup({
  references: preloadedRefs,
  addressLength:8,
  target:"usedReferences"
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
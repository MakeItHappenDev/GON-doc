const setup = (options) => {
  const {references = {},addressLength = 8,target = "references"} = options

  //Import refs
  let knownObjects = new Map()
  const refs = {...references}

  const keys = Object.keys(refs)
  keys.forEach(k=>{
    knownObjects.set(refs[k],k)
  })

  const usedObjects = new Map()



  //Create functionnal generator
  const generator = function* (length = 8){
    while(true){
      const random = Math.random().toString(16).slice(2,2+length)
      yield `0x${random}`
    }
  }
  const generate = generator(addressLength)

  //Type of expected return
  return (type = "object") => {
    if(type === "map"){
      return usedObjects
    }
    else if(type === "references"){
      //Generate from usedObjects
      const usedRefs = {}
      const entries = usedObjects.entries()
      let active = entries.next()
      while(!active.done){
        usedRefs[active.value[1]] = active.value[0]
        active = entries.next()
      }
      return usedRefs
    }
    else if(type === "allReferences"){
      //Generate from usedObjects
      const usedRefs = refs
      const entries = usedObjects.entries()
      let active = entries.next()
      while(!active.done){
        usedRefs[active.value[1]] = active.value[0]
        active = entries.next()
      }
      return usedRefs
    }
    else{
      return object => {
        let address
        if(usedObjects.has(object)){
          address = usedObjects.get(object)
        }
        else{
          //Check if object is known
          if(knownObjects.has(object)){
            address = knownObjects.get(object)
          }
          else{
            //Ensure uniqueness 
            //maybe this should be in the generator function
            do{ address = generate.next().value }
            while(refs[address] !== undefined)
          }
          usedObjects.set(object,address)
        }
        return `$${target}.${address}`
      }
    }
  }
}
export default setup
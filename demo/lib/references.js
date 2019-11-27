import Reference from './reference'

const setup = (options) => {
  const {references = {},addressLength = 8,path = ["references"]} = options

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
      for(let active = entries.next();active.done != true;active = entries.next()){
        usedRefs[active.value[1]] = active.value[0]
      }
      return usedRefs
    }
    else if(type === "allReferences"){
      //Generate from usedObjects
      const usedRefs = refs
      const entries = usedObjects.entries()

      for(let active = entries.next();active.done != true;active = entries.next()){
        usedRefs[active.value[1]] = active.value[0]
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
        return new Reference(address,path)
      }
    }
  }
}
export default setup
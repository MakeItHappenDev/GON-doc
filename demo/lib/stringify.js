import setup from './setup'
import createReferences from '../lib/createReferences'
import Reference from './reference'

const serializeObject = (object) => {
  let returnStr = []
  Object.keys(object).forEach(function(key) {
    returnStr.push(`"${key}":${serialize(object[key])}`)
  })
  return `{${returnStr.join(', ')}}`
}

const serializeArray = (array) => {
  return `[]`
}

const serializeReference = (ref) => {
  return ref.toGON()
}

const serializeDate = (date) => {
  return `|${date.toISOString()}|`
}

const serialize = (object) => {

  //Looking for primitives/functions
  const typeOf = typeof object
  if(typeOf !== "object"){
    switch (typeOf) {
      case 'function':return 'Function(){}'
      case 'undefined':return 'null';
      case 'boolean':return object?'true':'false';
      case 'number':return `${object}`;
      case 'bigint':return `${object.toString()}n`;
      case 'string':return `"${object}"`;
      case 'symbol':return `#${object.toString()}#`
      default:return typeOf;
    }

  }
  //Flavor of objects
  else{
    if (object === null){
      console.log(object)
      return 'null'
    }
    else if(object instanceof Array){
      return serializeArray(object)
    }
    else if(object instanceof Reference){
      return serializeReference(object)
    }
    else if(object instanceof Date){
      return serializeDate(object)
    }
    else if(object instanceof Object){
      return serializeObject(object)
    }
  }
}


const stringify = (object, target = "references") => {

  const init = setup({
    path:[target]
    })
  const findRef = init("objects")

  let data = {}
  try{
    data["data"] = createReferences(object,findRef)
    data[target] = init("references")
  }
  catch(e){
    data:{error:e.toString()}
  }


  //return data


  return serialize(data)
}

export default stringify




const knowObjects = new Map()

function* generator(start = 0, end = Infinity, step = 1) {
    for (let i = start; i < end; i += step) {
        yield i;
    }
}
const generate = generator(0)

const findRef = (knowObjects,generate) => object => {
    if(knowObjects.has(object)){
        return knowObjects.get(object)
    }
    else{
        let retour = generate.next().value;
        knowObjects.set(object, retour)
        return retour
    }
}

const displayRefs = () => {
    const refs = {}
    knowObjects.forEach((key,object) => {
        refs[key] = object
    })
    return refs
}

const lookupRef = findRef(knowObjects,generate)

const serialize = (entity) => {
    const data = dispatch(entity)
    const refs = displayRefs()

    return {data,refs}
}

const dispatch = (entity) => {
    let data
    if(entity instanceof Array){
        data = serializeArray(entity)
    }
    // Test the rest of the possibilities here or you get all the null/set/map etc etc
    else if(typeof entity === "object"){
        data = serializeObject(entity)
    }
    else{
        // Primitives
        data = entity
    }
    return data
}

const serializeObject = (object) => {

    let ref = lookupRef(object)
    for(let key in object){
        if(object.hasOwnProperty(key)){
            if(object[key] instanceof Array){
                object[key] = serializeArray(object[key])
            }
            else if(typeof object[key] !== "object") {
                //do nothing
            }
            else{
                object[key] = `$refs.${lookupRef(object[key])}`
            }
        }
    }

    return `$refs.${ref}`
}

const serializeArray = array => {
    let returnArray = []
    
    array.forEach(element => {
        const thisEl = serializeObject(element)
        returnArray.push(thisEl)
    });
    return returnArray
}

export default {
    serialize
} 




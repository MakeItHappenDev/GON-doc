const knowObject = new Map()
const iObject = 0

const findRef = (knowObject,iObject) => object => {
    if(knowObject.has(object)){
        return  knowObject.get(object)
    }
    else{
        let retour = iObject;
        iObject++;
        knowObject.set(object, retour)
        return retour
    }
}

export default findRef(knowObject,iObject)
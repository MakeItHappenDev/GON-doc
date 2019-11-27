function Reference(target,path = ["references"]){
  this.target = target
  this.path = path
  this.toJSON = () => {
    return {type:"ref",target:`$${this.path.join('.')}.${this.target}`}
  }
  this.toGON = () => {
    return `$${this.path.join('.')}.${this.target}`
  }
}
//Reference.prototype.toJSON = 

export default Reference
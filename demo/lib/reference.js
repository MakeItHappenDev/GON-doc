function Reference2(target,path = ["references"]){
  this.target = target
  this.path = path
  this.toJSON = () => {
    return '@@@@'+this.path + '/' + this.target
    //return `@${this.path.join('.')}.${this.target}@`
  } 
  this.toGON = () => {
    return `$${this.path.join('.')}.${this.target}`
  }
}

export default Reference2
function Reference(path = []) {
  this.path = path;
  this.getValue = object => {
    return findPath(object, this.path);
  };
  this.toJSON = () => {
    return `@${this.path.join('.')}@`
  };
}

const findPath = (current, path) => {
  path.forEach(p => {
    current = current[p];
  });
  return current;
};



export default Reference
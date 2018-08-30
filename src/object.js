class ObjectManipulator {
  static create = obj => new ObjectManipulator(obj)
  constructor(obj) {
    this.obj = obj
  }

  value = () => this.obj
  iterate = () => Object.entries(this.value()).map(entry => ({ key: entry[0], value: entry[1] }))
  forEach = fn => {
    this.iterate().forEach((entry, i) => fn(entry, i, this))
    return this
  }
  reduce = (fn, initial) =>
    ObjectManipulator.create(this.iterate().reduce((result, entry, i) => fn(result, entry, i, this.obj), initial))
  map = fn =>
    this.reduce((result, entry, i) => {
      result[entry.key] = fn(entry, i, this.obj)
      return result
    }, {})
  filter = fn =>
    this.reduce((result, entry, i) => {
      if (fn(entry, i, this.obj)) {
        result[entry.key] = entry.value
      }
      return result
    }, {})
}

export default obj => ObjectManipulator.create(obj)

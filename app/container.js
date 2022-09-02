function Container() {
  this.depedencies = {}
  this.factories = {}
}

Container.prototype.register = function (name, depedency) {
  this.depedencies[name] = depedency
}

Container.prototype.factory = function (name, factory, depedencies) {
  this.factories[name] = { factory, depedencies }
}

Container.prototype.inject = function (factory, depedencies) {
  if (depedencies) {
    return factory.call(null, Object.fromEntries(Object.entries(depedencies).map(([name, depedency]) => [name, this.get(depedency)])))
  }

  return factory.call(null)
}

Container.prototype.get = function (name) {
  if (!this.depedencies[name]) {
    const factory = this.factories[name]

    this.depedencies[name] = factory && this.inject(factory.factory, factory.depedencies)

    if (!this.depedencies[name]) throw new Error(`Cannot find module ${name}`)
  }

  return this.depedencies[name]
}

module.exports = new Container
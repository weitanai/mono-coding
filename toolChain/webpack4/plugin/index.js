class HelloPlugin {
    apply(compiler) {
      compiler.hooks.done.tap('HelloPlugin', () => {
        console.log('Hello Plugin!-------')
      })
    }
  }
  
  module.exports = HelloPlugin
  
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/todoList/'
      : '/todoList/dist/'
  }
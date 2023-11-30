const mongoose = require('mongoose')
const config = require('./config')
const { MONGO_DATABASE_URL } = require("./config");

mongoose.set('strictQuery', false)

module.exports = async () => {
  console.log()
  if(config.dbInstance) {
    console.log('> Database already instanced, still running!')
    return Promise.resolve(config.dbInstance)
  }
  mongoose
    .connect(MONGO_DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .catch(error => {
      console.error(error.message)
      return Promise.reject(error)

    })
  config.dbInstance = mongoose.connection
  console.log('> Connected to database')
  return config.dbInstance
}

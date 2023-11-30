const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  username: String,
  name: String,
  lastName: String,
  email: String,
  phone: String,
  role: String

},{
  collection: 'user',
  versionKey: false,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  id: false
})


module.exports = mongoose.model('user',schema)

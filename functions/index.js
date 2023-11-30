const {onRequest} = require("firebase-functions/v2/https");
const express = require("express");
const app = express();
const User = require('./models/user.model');
const mongoose = require('mongoose');
const { verifyToken } = require('./helpers/verify-token')

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

const database  = require('./static/database');

app.get('/user', verifyToken ,async (req, res) => {
  try {
    await database();
    const perPage = Number(req.query.perPage) || 20
    const page = Number(req.query.page) || 1
    const order = req.query.order || 'desc'
    const role = req.query.role || null

    const logic = {
      name: {
        $regex: `^.*${req.query.query || ''}.*$`,
        $options: 'i'
      }
    }

    if(role) logic.role = role

    const data = await User.find(logic)
      .skip(perPage*(page-1))
      .limit(perPage)
      .sort({ created: order })

    const total = await User.countDocuments(logic)
    const pages = Math.ceil(total/perPage)

   if(!total) return res.status(404).json({ error: 'No se encontraron usuarios' , code: 404});

    res.status(200).json({
      data,
      total,
      page,
      pages,
      perPage
    });

  } catch (error) {
    // Maneja los errores

    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.get('/user/:id', async (req, res) => {
  await database();
  const id =  mongoose.Types.ObjectId(req.params.id)
  const user = await User.findById(id)
  if(!user) {
    return res.status(404).json({ error: 'El usuario no existe' , code: 404});
  }
  res.status(200).json(user);
})

app.post('/user', async (req, res) => {
  await database();

  const user = await User.create(req.body)

  if(!user) {
    return res.status(400).json({ error: 'No se pudo crear el usuario' , code: 400});
  }
  res.status(201).json(user);
})

app.put('/user/:id', async (req, res) => {
  await database();
  const id =  mongoose.Types.ObjectId(req.params.id)

  const user = await User.findByIdAndUpdate(
    id,
    req.body,
    { new : true }
  )
  if(!user) {
    return res.status(404).json({ error: 'El usuario no existe' , code: 404});
  }
  res.status(200).json(user);

})

exports.api = onRequest(app);

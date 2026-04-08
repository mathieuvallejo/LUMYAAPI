<<<<<<< HEAD
import * as model from'../models/commentaire.js';
=======
const model = require('../models/commentaire');
>>>>>>> 154a8d8 (commentaire(controllers,models,toutes))

async function getAll(req, res) {
  try {
    const result = await model.selectAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getOne(req, res) {
  try {
    const id = req.params.id;
    const result = await model.selectById(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getByVideo(req, res) {
  try {
    const idVideo = req.params.idVideo;
    const result = await model.selectByVideo(idVideo);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getByUser(req, res) {
  try {
    const idUser = req.params.idUser;
    const result = await model.selectByUser(idUser);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function create(req, res) {
  try {
    const data = req.body;
    const result = await model.insert(data);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function edit(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await model.update(id, data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function remove(req, res) {
  try {
    const id = req.params.id;
    await model.remove(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

<<<<<<< HEAD
export  { getAll, getOne, getByVideo, getByUser, create, edit, remove };
=======
module.exports = { getAll, getOne, getByVideo, getByUser, create, edit, remove };
>>>>>>> 154a8d8 (commentaire(controllers,models,toutes))

import * as model from'../models/likes.js';

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

async function getByUser(req, res) {
  try {
    const idUser = req.params.idUser;
    const result = await model.selectByUser(idUser);
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

async function getByCommentaire(req, res) {
  try {
    const idCommentaire = req.params.idCommentaire;
    const result = await model.selectByCommentaire(idCommentaire);
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

async function remove(req, res) {
  try {
    const id = req.params.id;
    await model.remove(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function unlikeVideo(req, res) {
  try {
    const { idUser, idVideo } = req.body;
    await model.removeByUserAndVideo(idUser, idVideo);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function unlikeCommentaire(req, res) {
  try {
    const { idUser, idCommentaire } = req.body;
    await model.removeByUserAndCommentaire(idUser, idCommentaire);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export  { getAll, getOne, getByUser, getByVideo, getByCommentaire, create, remove, unlikeVideo, unlikeCommentaire };
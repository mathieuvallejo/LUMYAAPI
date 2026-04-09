<<<<<<< HEAD
<<<<<<< HEAD
import pool from '../config/database.js';
=======
const pool = require('../config/database');
>>>>>>> e726143 (add video (controller,models,routes))
=======
import pool from '../config/database.js';
>>>>>>> 48b2faf (correction transformation en import from)

const Video = {
  selectAll: async function () {
    const [rows] = await pool.query('SELECT * FROM video');
    return rows;
  },

  selectById: async function (id) {
    const [rows] = await pool.query('SELECT * FROM video WHERE idVideo = ?', [id]);
    return rows[0] || null;
  },

  selectByUser: async function (idUser) {
    const [rows] = await pool.query('SELECT * FROM video WHERE idUser = ?', [idUser]);
    return rows;
  },

  insert: async function (data) {
    const { titre, urlVideo, tags = null, statutModeration = 0, idUser } = data;
    const [result] = await pool.query(
      'INSERT INTO video (titre, urlVideo, datePublication, nbVues, statutModeration, tags, idUser) VALUES (?, ?, NOW(), 0, ?, ?, ?)',
      [titre, urlVideo, statutModeration, tags ? JSON.stringify(tags) : null, idUser]
    );
    return { idVideo: result.insertId, titre, urlVideo, datePublication: new Date(), nbVues: 0, statutModeration, tags, idUser };
  },

  update: async function (id, data) {
    const fields = [];
    const values = [];

    Object.keys(data).forEach(key => {
      if (key !== 'idVideo' && key !== 'datePublication') {
        fields.push(`${key} = ?`);
        values.push(key === 'tags' ? JSON.stringify(data[key]) : data[key]);
      }
    });

    if (fields.length === 0) return this.selectById(id);

    values.push(id);
    await pool.query(`UPDATE video SET ${fields.join(', ')} WHERE idVideo = ?`, values);
    return this.selectById(id);
  },

  remove: async function (id) {
    const video = await this.selectById(id);
    await pool.query('DELETE FROM video WHERE idVideo = ?', [id]);
    return video;
  },

  incrementVues: async function (id) {
    await pool.query('UPDATE video SET nbVues = nbVues + 1 WHERE idVideo = ?', [id]);
    return this.selectById(id);
  }
};

<<<<<<< HEAD
<<<<<<< HEAD
export default Video;
=======
module.exports = Video;
>>>>>>> e726143 (add video (controller,models,routes))
=======
export default Video;
>>>>>>> 48b2faf (correction transformation en import from)

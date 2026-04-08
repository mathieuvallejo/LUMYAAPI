const pool = require('../config/database');

const Commentaire = {
  selectAll: async function () {
    const [rows] = await pool.query('SELECT * FROM commentaire');
    return rows;
  },

  selectById: async function (id) {
    const [rows] = await pool.query('SELECT * FROM commentaire WHERE idCommentaire = ?', [id]);
    return rows[0] || null;
  },

  selectByVideo: async function (idVideo) {
    const [rows] = await pool.query('SELECT * FROM commentaire WHERE idVideo = ?', [idVideo]);
    return rows;
  },

  selectByUser: async function (idUser) {
    const [rows] = await pool.query('SELECT * FROM commentaire WHERE idUser = ?', [idUser]);
    return rows;
  },

  insert: async function (data) {
    const { contenuCommentaire, idVideo, idUser } = data;
    const [result] = await pool.query(
      'INSERT INTO commentaire (contenuCommentaire, datePost, idVideo, idUser) VALUES (?, NOW(), ?, ?)',
      [contenuCommentaire, idVideo, idUser]
    );
    return { idCommentaire: result.insertId, contenuCommentaire, datePost: new Date(), idVideo, idUser };
  },

  update: async function (id, data) {
    const fields = [];
    const values = [];

    Object.keys(data).forEach(key => {
      if (key !== 'idCommentaire' && key !== 'datePost') {
        fields.push(`${key} = ?`);
        values.push(data[key]);
      }
    });

    if (fields.length === 0) return this.selectById(id);

    values.push(id);
    await pool.query(`UPDATE commentaire SET ${fields.join(', ')} WHERE idCommentaire = ?`, values);
    return this.selectById(id);
  },

  remove: async function (id) {
    const commentaire = await this.selectById(id);
    await pool.query('DELETE FROM commentaire WHERE idCommentaire = ?', [id]);
    return commentaire;
  }
};

module.exports = Commentaire;
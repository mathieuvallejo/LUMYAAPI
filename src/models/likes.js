import pool from'../config/database.js';

const Like = {
  selectAll: async function () {
    const [rows] = await pool.query('SELECT * FROM likes');
    return rows;
  },

  selectById: async function (id) {
    const [rows] = await pool.query('SELECT * FROM likes WHERE idLike = ?', [id]);
    return rows[0] || null;
  },

  selectByUser: async function (idUser) {
    const [rows] = await pool.query('SELECT * FROM likes WHERE idUser = ?', [idUser]);
    return rows;
  },

  selectByVideo: async function (idVideo) {
    const [rows] = await pool.query('SELECT * FROM likes WHERE idVideo = ?', [idVideo]);
    return rows;
  },

  selectByCommentaire: async function (idCommentaire) {
    const [rows] = await pool.query('SELECT * FROM likes WHERE idCommentaire = ?', [idCommentaire]);
    return rows;
  },

  insert: async function (data) {
    const { idUser, idVideo = null, idCommentaire = null } = data;
    const [result] = await pool.query(
      'INSERT INTO likes (idUser, idVideo, idCommentaire) VALUES (?, ?, ?)',
      [idUser, idVideo, idCommentaire]
    );
    return { idLike: result.insertId, idUser, idVideo, idCommentaire };
  },

  remove: async function (id) {
    const like = await this.selectById(id);
    await pool.query('DELETE FROM likes WHERE idLike = ?', [id]);
    return like;
  },

  removeByUserAndVideo: async function (idUser, idVideo) {
    await pool.query('DELETE FROM likes WHERE idUser = ? AND idVideo = ?', [idUser, idVideo]);
  },

  removeByUserAndCommentaire: async function (idUser, idCommentaire) {
    await pool.query('DELETE FROM likes WHERE idUser = ? AND idCommentaire = ?', [idUser, idCommentaire]);
  }
};
export default Like;

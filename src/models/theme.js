import pool from '../config/database.js';

const Theme = {
  selectAll: async function () {
    const [rows] = await pool.query('SELECT * FROM theme ORDER BY libelle');
    return rows;
  },

  selectById: async function (id) {
    const [rows] = await pool.query('SELECT * FROM theme WHERE idTheme = ?', [id]);
    return rows[0] || null;
  }
};

export default Theme;

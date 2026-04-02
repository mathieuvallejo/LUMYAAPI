const pool = require('../config/database');

const User = {
  selectAll: async function () {
    const [rows] = await pool.query('SELECT * FROM users');
    return rows;
  },

  selectById: async function (id) {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0] || null;
  },

  selectByName: async function (name) {
    const [rows] = await pool.query('SELECT * FROM users WHERE name = ?', [name]);
    return rows;
  },

  insert: async function (data) {
    const { name, email, password, role = 'user' } = data;
    const [result] = await pool.query(
      'INSERT INTO users (name, email, password, role, createdAt) VALUES (?, ?, ?, ?, NOW())',
      [name, email, password, role]
    );
    return { id: result.insertId, name, email, password, role, createdAt: new Date() };
  },

  update: async function (id, data) {
    const fields = [];
    const values = [];
    
    Object.keys(data).forEach(key => {
      if (key !== 'id' && key !== 'createdAt') {
        fields.push(`${key} = ?`);
        values.push(data[key]);
      }
    });
    
    if (fields.length === 0) return this.selectById(id);
    
    values.push(id);
    await pool.query(`UPDATE users SET ${fields.join(', ')} WHERE id = ?`, values);
    return this.selectById(id);
  },

  remove: async function (id) {
    const user = await this.selectById(id);
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
    return user;
  }
};

module.exports = User;

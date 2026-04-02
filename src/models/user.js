const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  createdAt: { type: Date, default: Date.now }
});

userSchema.statics.selectAll = function () {
  return this.find();
};

userSchema.statics.selectById = function (id) {
  return this.findById(id).lean();
};

userSchema.statics.selectByName = function (name) {
  return this.find({ name }).lean();
};

userSchema.statics.insert = function (data) {
  return this.create(data);
};

userSchema.statics.update = function (id, data) {
  return this.findByIdAndUpdate(id, data, { new: true }).lean();
};

userSchema.statics.remove = function (id) {
  return this.findByIdAndDelete(id).lean();
};

module.exports = mongoose.model('User', userSchema);

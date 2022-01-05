module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    username: { type: String },
    password: { type: String },
    auth: { type: String },
    name: { type: String },
  });

  return mongoose.model('users', UserSchema);

};


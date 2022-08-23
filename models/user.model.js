/** File that setup an user */
const mongoose = require('mongoose');
/** Function imported from the package validator that check the email (return true or false) */
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLenght: 55,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minLenght: 6
    },
    picture: {
      type: String,
      default: './uploads/profil/random-user.png'
    },
    bio: {
      type: String,
      max: 1024
    },
    followers: {
      type: [String]
    },
    following: {
      type: [String]
    },
    likes: {
      type: [String]
    }
  },
  {
    timestamps: true
  }
);

/** Apply the userSchema on user table in MongoDB */
const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;

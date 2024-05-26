import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: Object,
    default: {
      first: String,
      last: String,
    },
  },
  email: String,
  created: Number,
  updated: Number,
  active: Boolean,
  banned: Boolean,
  locale: String,
  _internal: Object,
  _tags: Array,
});

export const User = mongoose.model("User", UserSchema);

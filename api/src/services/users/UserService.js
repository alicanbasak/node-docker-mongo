import { User } from "../../models/UserScheme.js";

export const UserService = {
  internalFields: ["-password", "-__v", "-_internal", "-_tags"],

  get: id => User.findById(id).select(UserService.internalFields),
  create: data => User.create(data),
  put: id => console.log(`User route with put method and id: ${id}`),
  delete: id => console.log(`User route with delete method and id: ${id}`),
};

import { User } from "../../models/UserScheme.js";

export const UserService = {
  internalFields: ["-password", "-__v", "-_internal", "-_tags"],

  get: id => User.findById(id).select(UserService.internalFields),
  create: data => User.create(data),
  update: async (id, data) => {
    try {
      if (data.name) {
        Object.entries(data.name).forEach(([key, value]) => {
          data[`name.${key}`] = value;
        });
        delete data.name;
      }

      return await User.findByIdAndUpdate(
        id,
        {
          $set: data,
        },
        {
          new: true,
        }
      ).select(UserService.internalFields);
    } catch (err) {
      throw new Error(err);
    }
  },
  delete: id => User.findByIdAndDelete(id),
};

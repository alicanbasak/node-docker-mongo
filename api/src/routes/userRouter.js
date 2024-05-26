import express from "express";
import { UserService } from "../services/users/UserService.js";

const userRouter = express.Router();

export const userRoutes = router => {
  router.use("/users", userRouter);

  userRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    UserService.get(id)
      .then(user => res.status(200).json(user))
      .catch(err => res.status(500).json({ error: err.message }));
  });

  userRouter.post("/", async (req, res) => {
    const data = req.body;
    UserService.create(data)
      .then(user => res.status(201).json(user))
      .catch(err => res.status(500).json({ error: err.message }));
  });

  userRouter.put("/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;

    UserService.update(id, data)
      .then(user => res.status(200).json(user))
      .catch(err => res.status(500).json({ error: err.message }));
  });

  userRouter.delete("/:id", (req, res) => {
    const id = req.params.id;

    UserService.delete(id)
      .then(user => {
        if (user) {
          return res.status(200).json({
            message: `User with id ${id} deleted successfully`,
          });
        } else {
          return res.status(404).json({
            message: `User with id ${id} not found`,
          });
        }
      })
      .catch(err => res.status(500).json({ error: err.message }));
  });
};

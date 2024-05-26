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
    res.status(200).send(`User route with put method and id: ${req.params.id}`);
  });

  userRouter.delete("/:id", (req, res) => {
    res
      .status(200)
      .send(`User route with delete method and id: ${req.params.id}`);
  });
};

import express from "express";

const userRouter = express.Router();

export const userRoutes = router => {
  router.use("/users", userRouter);

  userRouter.get("/:id", (req, res) => {
    res.status(200).send(`User route with id: ${req.params.id}`);
  });
};

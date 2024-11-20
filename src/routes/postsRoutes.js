import express from "express";
import { listarPosts } from "../controllers/postsControllers.js";

const routes = (app) => {
  app.use(express.json());
  app.get("/posts", listarPosts);
};

export default routes;

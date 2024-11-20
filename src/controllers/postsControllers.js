import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
  const post = await getTodosPosts();
  res.status(200).json(post);
}

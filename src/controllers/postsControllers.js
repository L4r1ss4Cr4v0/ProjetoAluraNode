import {
  getTodosPosts,
  getPostAleatorio,
  criarPost,
  atualizarPost,
} from "../models/postsModel.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiServices.js";

export async function listarPosts(req, res) {
  const post = await getTodosPosts();
  res.status(200).json(post);
}

export async function selecionarPost(req, res) {
  const post = await getPostAleatorio();
  res.status(200).json(post);
}

export async function postarNovoPost(req, res) {
  const novoPost = req.body;
  try {
    const postCriado = await criarPost(novoPost);
    res.status(200).json(postCriado);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}

export async function uploadImagem(req, res) {
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: "",
  };
  try {
    const postCriado = await criarPost(novoPost);
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
    fs.renameSync(req.file.path, imagemAtualizada);
    res.status(200).json(postCriado);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}

export async function atualizarPostagem(req, res) {
  const id = req.params.id;
  const urlImagem = `http://localhost:3000/${id}.png`;
  try {
    const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
    const descricao = await gerarDescricaoComGemini(imgBuffer);
    const postAtualizado = {
      imgUrl: urlImagem,
      descricao: descricao,
      alt: req.body.alt,
    };
    const postCriado = await atualizarPost(id, postAtualizado);
    res.status(200).json(postCriado);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}

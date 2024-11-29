import "dotenv/config";
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
  const db = conexao.db("imersao-projeto");
  const colecao = db.collection("posts");
  return colecao.find().toArray();
}

export async function getPostAleatorio() {
  const db = conexao.db("imersao-projeto");
  const colecao = db.collection("posts");
  const resultado = await colecao
    .aggregate([{ $sample: { size: 1 } }])
    .toArray();
  return resultado.length > 0 ? resultado[0] : null;
}

export async function criarPost(novoPost) {
  const db = conexao.db("imersao-projeto");
  const colecao = db.collection("posts");
  return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, postAltualizado) {
  const db = conexao.db("imersao-projeto");
  const colecao = db.collection("posts");
  const objID = ObjectId.createFromHexString(id);
  return colecao.updateOne(
    { _id: new ObjectId(objID) },
    { $set: postAltualizado }
  );
}

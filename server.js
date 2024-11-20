import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Uma foto teste",
    imagem:
      "https://s1.static.brasilescola.uol.com.br/be/2023/03/torre-eiffel.jpg",
  },
  {
    id: 2,
    descricao: "A bela natureza",
    imagem: "https://s1.static.brasilescola.uol.br/be/2023/03/torre-eiffel.jpg",
  },
  {
    id: 3,
    descricao: "Um gato fofo",
    imagem: "https://s1.static.brasilescola.uol.br/be/2023/03/torre-eiffel.jpg",
  },
  {
    id: 4,
    descricao: "Uma cidade vibrante",
    imagem: "https://s1.static.brasilescola.uol.br/be/2023/03/torre-eiffel.jpg",
  },
  {
    id: 5,
    descricao: "Um carro esportivo",
    imagem: "https://s1.static.brasilescola.uol.br/be/2023/03/torre-eiffel.jpg",
  },
  {
    id: 6,
    descricao: "Um pôr do sol mágico",
    imagem: "https://s1.static.brasilescola.uol.br/be/2020/03/torre-eiffel.jpg",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando");
});

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});

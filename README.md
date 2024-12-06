
# Projeto: Eiffel Lens

Esse projeto é uma API feita em Node.js e MongoDB que consome a API do Gemini. A Eiffel Lens armazena fotos geradas por inteligências artificiais da Torre Eiffel em diferentes lugares do mundo. Com uma estética de posts do Instagram, a API oferece um “alt”, contendo uma descrição exatamente o que a imagem mostra, e um campo de descrição em que o Gemini analisa a imagem e cria uma descrição relativa a ela.

- [Sobre](#Sobre)
- [Armazenamento em Clond](#Armazenamento-em-Cloud)
- [Pré-requisitos](#Pré-requisitos)
- [Instalação](#Instalação)
- [Rotas](#Rotas)


## Sobre

Esse projeto foi desenvolvido durante a **Imersão Dev Back-End da Alura**. O objetivo era criar uma API que armazenasse imagens e que consumisse a API do Gemini. O motivo por trás da ideia de tornar a API sobre “Torre EIffels” foi observar a incrível capacidade que as inteligências artificiais possuem de misturar os elementos reais (Torre Eiffel e México) para gerar algo surreal (a Torre Eiffel no México). 


## Armazenamento em Cloud

Essa API está disponível nesse link: https://eiffellens-332687047801.southamerica-east1.run.app

**Observações: Esse link não condiz com o projeto mais atualizado.** 

Algumas rotas, como verá na sessão **"Endpoints”**, só estarão disponíveis caso baixem o projeto e rodem localmente.

## Pré-requisitos

Para rodar esse projeto, é necessário ter instalado em sua máquina:
- **Node.js 20.X.X ou superior (usei o 22.11.0)**
## Instalação

Uma vez que o Node.js foi devidamente instalado, para rodar o projeto é necessário:

 **1 - Clonar este repositório**
```bash
  git clone https://github.com/L4r1ss4Cr4v0/ProjetoAluraNode.git
  cd ProjetoAluraNode
```

 **2 - Instale as dependências do projeto:**
 
```bash
  npm install
```

 **3 - Renomeie o arquivo `.env_exemplo` para `.env` e, com sua chave API do Gemini, substitua o campo “adicione_aqui_sua_chave” para a chave em sí:**

```env
  STRING_CONEXAO = "mongodb+srv://UxJnffBv8FMJYZ8Q:UxJnffBv8FMJYZ8Q@cluster0.4i1w2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  GEMINI_API_KEY = adicione_aqui_sua_chave
```

Finalizadas as etapas, o projeto estará rodando perfeitamente em sua máquina. **Lembre-se que está API é apenas para consumo, ou seja, o banco de dados não poderá ser alterado.**
    
## Rotas

A Eiffel Lens é composta por apenas rotas de GET

### 1. **GET /posts**
Descrição: Devolve todos os posts até então colocados no banco de dados.

   - **Exemplo de Resposta**:
     ```json
      {
        "_id": "673e2a694802c291684ddb4f",
        "descricao": "Torre Eiffel, em Paris",
        "alt": "Imagem da Torre Eiffel",
        "imgUrl": "http://localhost:3000/673e2a694802c291684ddb4f.png"
      }
      ...
      ```

### 2. **GET /posts/random (Apenas via localhost)**
Descrição: Devolve um post aleatório.

   - **Exemplo de Resposta**:
     ```json
      {
        "_id": "673e2a694802c291684ddb4f",
        "descricao": "Torre Eiffel, em Paris",
        "alt": "Imagem da Torre Eiffel",
        "imgUrl": "http://localhost:3000/673e2a694802c291684ddb4f.png"
      }
     ```

### 3. **GET /{id_da_imagem} (Apenas via localhost)**
Descrição: Devolve a imagem do correspondente ao post com tal id.
    
   - **Exemplo de Resposta**:
   ![Torre Eiffel nos Estados Unidos](./uploads/6746433525dc93dc668b1ed8.png)

   

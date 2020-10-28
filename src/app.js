const express = require("express");
const cors = require("cors");
const { v4: uuid, validate: isUuid, v4, validate } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function validateId(request, response, next){
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if(!validate(id) || repositoryIndex < 0){
    return response.status(400).json({error: "Invalid id!"})
  }

  return next();
}
app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;
  
  const repository = {
    id: v4(),
    title,
    url,
    techs,
    likes: 0
  }

  repositories.push(repository);
  return response.json(repository);
});

app.put("/repositories/:id", validateId, (request, response) => {

  const { id } = request.params;

  repositoryIndex = repositories.findIndex(repository => repository.id === id);
  
  const {title, url, techs } = request.body;
  const likes = repositories[repositoryIndex].likes;

  const repository = {id,title, url, techs, likes};

  repositories[repositoryIndex] = repository;

  return response.json(repository);

});

app.delete("/repositories/:id", validateId, (request, response) => {
  const { id } = request.params;

  repositoryIndex = repositories.findIndex(repository => repository.id === id);

  repositories.splice(repositoryIndex,1);
 
  return response.status(204).send();
});

app.post("/repositories/:id/like", validateId, (request, response) => {
  
  const { id } = request.params;

  repositoryIndex = repositories.findIndex(repository => repository.id === id);

  repository = repositories[repositoryIndex];

  repository.likes++;

  return response.json(repository);
});

module.exports = app;

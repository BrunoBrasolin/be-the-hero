const express = require("express"); // Importando o express
const routes = require("./routes");
const cors = require("cors");

const app = express(); // Instanciando a aplicação, criando ela

app.use(cors()); // Limita qual front end pode buscar esta api
app.use(express.json()); // Transformar o JSON em objeto nas requisições
app.use(routes);

app.listen(3333);

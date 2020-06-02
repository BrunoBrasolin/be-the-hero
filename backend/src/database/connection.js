const knex = require("knex"); // importando knex
const configuration = require("../../knexfile"); // importando as configurações

const connection = knex(configuration.development); // pegando as configuracoes do servidor de desenvolvimento

module.exports = connection;

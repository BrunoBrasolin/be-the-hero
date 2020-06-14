const knex = require('knex'); // importando knex
const configuration = require('../../knexfile'); // importando as configurações

const config =
  process.env.NODE_ENV === 'test'
    ? configuration.test
    : configuration.development; // Pegando a variavel global de ambiente

const connection = knex(config); // pegando as configuracoes do servidor de desenvolvimento

module.exports = connection;

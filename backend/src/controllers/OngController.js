const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    // nome padrao para listagem
    const ongs = await connection("ongs").select("*");
    return response.json(ongs);
  },
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("ongs").insert({
      // await espera o codigo finalizar para fazer o proximo
      // connection rcebe como paramero a tabela .insert(inserir)
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return response.json({ id });
  },
};

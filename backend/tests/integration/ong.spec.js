const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.await();
    await connection.migrate.latest();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'Test Name',
      email: 'testemail@testemail.com',
      whatsapp: '12345678900',
      city: 'Test City',
      uf: 'TS',
    });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
  afterAll(() => {
    connection.destroy();
  });
});

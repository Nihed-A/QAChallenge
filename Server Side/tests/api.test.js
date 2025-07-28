const request = require('supertest');
import app from '../index.js'; 

describe('API auth and CRUD', () => {
  it('POST /auth/login succeeds with valid admin', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'admin@gmail.com', password: '12345' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('POST /auth/login fails with wrong credentials', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'wrong', password: 'wrong' });
    expect(res.statusCode).toBe(401);
  });

  it('GET /auth/category returns list', async () => {
    const res = await request(app).get('/auth/category');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.Result)).toBe(true);
  });

 
});

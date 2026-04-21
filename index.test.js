import request from 'supertest';
import app from './index.js';

describe('GET /', () => {
  it('should return 200 and the correct message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      msg: 'Hello from the server',
    });
  });
});

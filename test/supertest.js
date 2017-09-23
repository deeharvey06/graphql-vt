const request = require('supertest');
const mocha = require('mocha');
const expect = require('chai').expect;
const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;


describe('Route integration', () => {
  describe('POST', () => {
    it('responds to valid request with 200 status and application/json content type', done => {
      request(HOST)
      .post('/schema')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });
  });
});   
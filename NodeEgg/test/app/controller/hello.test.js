'use strict';

const { app } = require('egg-mock/bootstrap');

describe('hello -index', function() {
  it('hello index page', function() {
    return app.httpRequest()
      .get('/yuhua')
      .expect(200)
      .expect('Yuhua');
  });

  it('home getGirls page', function() {
    return app.httpRequest()
      .get('/getGirls')
      .expect(200)
      .expect('hi Girls');
  });
});


'use strict';

var api = require('./controllers/api'),
    index = require('./controllers');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/api/pledges', api.getPledges);
  app.post('/api/pledges', api.addPledge);
  app.delete('/api/pledges/:id', api.removePledge);
  app.put('/api/pledges/:id', api.incPledgeCommits);

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });
  
  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', index.index);
};
const env = require('../../../data/urls/env').server[process.env.BASEURL];
const request = require('supertest')(env);

exports.graphql_request = function(graphQlParams) {
  return request.post('')
    .set({'Content-Type': 'application/json'})
    .send(graphQlParams)    
}
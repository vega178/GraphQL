const chai = require('chai');
const expect = require("chai").expect;
const serviceSubscriber = require('../../../../request/graphql/subscriber/serviceSubscriber');
const subscriberBodyParameters = require('../../../bodyParams/graphql/subscriber/login_data').params;

describe('Graphql @subscriber Scenarios @graphFuncSuite\n', () => {
  it('@gql001 @subscriber_login @dev', (done) => {
    serviceSubscriber.graphql_request(subscriberBodyParameters.login_params())
    .end((error, response) => {
      expect(error).to.be.null;
      expect(response.status === 200).to.equal(true);
      expect(response.error).to.equal(false);
      expect(response.body.data.login.token.length > 0).to.equal(true);
      done();    
    })  
  })    
});

const chai = require('chai');
const expect = require("chai").expect;
const serviceSubscriber = require('../../../../request/graphql/subscriber/serviceSubscriber');
const subscriberBodyParameters = require('../../../bodyParams/graphql/subscriber/login_data');

describe('"Graphql @subscriber Scenarios @graphFuncSuite\n', () => {
  
  it('@gql001 @subscriber_login @dev', (done) => {
    serviceSubscriber.login(subscriberBodyParameters.login_params())
    .end((error, response) => {
      expect(error).to.be.null;
      done();    
    })  
  })    
});

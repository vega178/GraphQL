const expect = require("chai").expect;
const serviceSubscriber = require('../../../../request/graphql/subscriber/serviceSubscriber');
const subscriberBodyParameters = require('../../../bodyParams/graphql/subscriber/create_user_data');
const serviceUtils = require('../../../utils/service_utils');

describe('Graphql @subscriber Scenarios @graphFuncSuite\n', () => {
  let username = serviceUtils.ramdomUserName("vega128");
  let email = serviceUtils.randomMail("vega3");
  let password = "Testing1#";

  it('@gql002 @created_new_account_validation @dev', (done) => {
    serviceSubscriber.graphql_request(subscriberBodyParameters.created_account_params(username, email, password))
    .end((error, response) => {
      expect(error).to.be.null;
      expect(response.status === 200).to.equal(true);
      expect(response.body.data.createUser.id).not.to.be.null;
      expect(response.body.data.createUser.username.includes(username), 'user doesnt contains [username] intput').to.equals(true);
      expect(response.body.data.createUser.email.includes(email), 'user doesnt contains [email] intput').to.equals(true);
      expect(response.body.data.createUser.password != password).to.equals(true);
      expect(response.body.data.createUser.privilege).to.equals('user');
      expect(!(response.body.data.createUser.active)).to.equals(true);
      done();
    });  
  });
});

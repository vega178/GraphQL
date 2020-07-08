let credentialsUser = require("../../../../data/customerCredentials").credentials.dev;
module.exports = exports = {
  params: {
    login_params: function() {
      let email = credentialsUser.email;
      let password = credentialsUser.password;
      let query = `mutation ($email: String!, $password: String!) 
        { login( input: { email: $email, password: $password } ) 
        { token }  
      }`;
      return JSON.stringify({
        query: query,
        variables: { email, password },     
      })  
    }
  }     
}
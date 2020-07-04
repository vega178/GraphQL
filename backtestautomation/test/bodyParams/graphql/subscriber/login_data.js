const { login } = require("../../../../request/graphql/subscriber/serviceSubscriber")

exports.login_params = function(data) {
  return {
    data: JSON.stringify({
      query: "mutation {\n login(\n  input: {\n  email: \"vega-004@gmail.com\",\n  password: \"2588721ab\"\n } \n ) {\n  token\n  }\n} ",
      variables: {}      
    })  
  }         
}  

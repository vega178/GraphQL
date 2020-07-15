module.exports = {
  created_account_params: function (userName, userEmail, password) {
    let query = `mutation ($userName: String!, $password: String!, $userEmail: String! )
      { createUser( input: { username: $userName, password: $password, email: $userEmail } )
      { id, username, password, email, privilege, active, createdAt }
    }`; 
    return JSON.stringify({
      query: query,
      variables: { userName, userEmail, password }  
    });     
  }  
}
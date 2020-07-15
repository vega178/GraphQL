let currentDate = new Date();

module.exports = {
  randomMail: (rootMail) => {
    return rootMail + currentDate.getMinutes() + currentDate.getDay() + "@gmail.com";  
  }, 
  ramdomUserName : (rootUserName) => {
    return rootUserName  + currentDate.getMilliseconds() + 
      rootUserName.substr(Math.floor(Math.random() * rootUserName.length), rootUserName.length);   
  }     
}
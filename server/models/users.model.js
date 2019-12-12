const users = [];

module.exports = class User {
  constructor(user){
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.password = user.password;
  }
  save(){
    users.push(this);
  }
  static getAll(){
    return users;
  }
};

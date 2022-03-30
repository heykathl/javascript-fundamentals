
class User {
  constructor(name) {
    this.name = name;
  };

  getName() {
    return this.name;
  };

  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  };
};

class Userbase {
  constructor(users) {
    this.users = users;
  };

  count() {
    return this.users.length;
  };

  getNames() {
    return this.users.map(user => {
      return user.getName()
    });
  };

  getIntroductions() {
    return this.users.map(user => {
      return user.getIntroduction()
    });
  };
};

module.exports = {
  User,
  Userbase
};
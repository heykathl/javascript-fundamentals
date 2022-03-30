const UserClasses = require('../user')

describe('user', () => {
  const user = new UserClasses.User('Uma')
  
  test('returns the name of the user', () => {
    expect(user.getName()).toBe("Uma")
  });

  test('returns introduction message', () => {
    expect(user.getIntroduction()).toBe('Hi, my name is Uma')
  });
});


describe('userbase', () => {
  const users = [
    new UserClasses.User('Uma'),
    new UserClasses.User('Josh'),
    new UserClasses.User('Ollie')
  ];
  const userBase = new UserClasses.Userbase(users)
  
  test('count the number of users', () => {
    expect(userBase.count()).toBe(3)
  });

  test('return names of users', () => {
    expect(userBase.getNames()).toEqual(['Uma', 'Josh', 'Ollie'])
  });

  test('return introduction message for all users', () => {
    expect(userBase.getIntroductions()).toEqual([
      'Hi, my name is Uma',
      'Hi, my name is Josh',
      'Hi, my name is Ollie'
    ]);
  })
});
module.exports = (sequelize, DataTypes) => {
  const createUsers = sequelize.define('createUsers', {
    name: DataTypes.STRING,
    emailid: DataTypes.STRING
  }, {});
  createUsers.generate = (inputName, inputEmailId) => createUsers.create({ name: inputName, emailid: inputEmailId });
  createUsers.getNumbersAndResult = () => createUsers.findAndCountAll();
  return createUsers;
};
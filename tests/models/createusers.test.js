const model = require('../../models');

describe('user generate ()', () => {
  beforeAll(async () => {
    await model.createUsers.truncate();
  });
  it('should insert a data into database with given name and email', async () => {
    await model.createUsers.generate('shashwat','shashwat@gmail.com');
    expect(await model.createUsers.count()).toEqual(1);
  });
});
describe('getNumberAndResult ()', () => {
  beforeEach(async () => {
    await model.createUsers.truncate();
  });
  afterAll(async () => {
    model.sequelize.close();
  });
  it('should return the result that was inserted', async () => {
    await model.createUsers.generate('helloWorld','hello@gmail.com');
    await model.createUsers.getNumbersAndResult().then((result) => {
      console.log(result.rows);
      expect(result.rows.name).toEqual('helloWorl');
    });
  });
});

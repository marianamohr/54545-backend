import mongoose from "mongoose";
import User from "../src/dao/Users.dao.js";
import assert from "assert";
import userModel from "../src/dao/models/User.js";

before(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://marianamohr:c9zKW4F8Vadmdn5d@cluster0.zm7bida.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});

after(async () => {
  await mongoose.disconnect();
  console.log("Disconnected from MongoDB");
});

describe("Users", () => {
  let userDao;
  before(async () => {
    userDao = new User();
  });
  beforeEach(function () {
    this.timeout(5000);
  });
  describe("get", () => {
    it("dao deve retornar os usuarios em um array", async () => {
  /*     sinon.stub(userModel, "find").resolves({
        _id: new ObjectId("66523cdf22a8c6fa0c3a1328"),
        name: 'Gui Salzer',
        email: 'guisalzer@gmail.com',
        role: 'admin',
        pets: []
      }); */
      const resultado = await userDao.get();
      console.log(resultado)
      assert.strictEqual(Array.isArray(resultado), true);
    });
  });
  describe("save", () =>{
    it('Deve adicionar um usuario', async () => {
      const user = {
        first_name: 'Mari',
        email: 'johnsoe@gmail.com',
        last_name: 'Ramos Mohr',
        password: 'sdfsdfsafbdbdagd',
      }
/*       sinon.stub(userModel, "create").resolves({
        name: 'Gui Salzer',
        email: 'guisalzer@gmail.com',
        role: 'admin',
      }); */
      //const resultado = await userDao.save(user)
      assert.ok(resultado._id)
    });
  });
});

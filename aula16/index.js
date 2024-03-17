const userModel = require("./model/user.model");
const petModel = require("./model/pet.model");

const mongoose = require("mongoose");

const main = async () => {
  mongoose
    .connect(
      "mongodb+srv://marianamohr:c9zKW4F8Vadmdn5d@cluster0.zm7bida.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
  // buscar todos
  //let response = await userModel.find().explain("executionStats");
  // por nome

  //let response = await userModel
  // .find({ first_name: "Mariana" })
  // .explain("executionStats");

  // POPULATE
  // await petModel.create({ name: "Olivia", animal: "Buldog" });

  // await userModel.create({
  // first_name: "Cami",
  // last_name: "Mohr",
  // email: "Camimohr@gmail.com",
  // password: "123456",
  // });
  //let user = await userModel.findById("65f239cb886e2af4c1e03933");
  //console.log(user);

   //user.pets.push({ pet: "65f23ba4a110a7cb2b68b058" });
  // await userModel.updateOne({ _id: "65f239cb886e2af4c1e03933" }, user);
  const user = await userModel
    .find({_id: "65f239cb886e2af4c1e03933"});
    //.populate("pets.pet");

  console.log(user.pets);
};

main();

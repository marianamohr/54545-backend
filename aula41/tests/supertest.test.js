import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const request = supertest("http://localhost:8080");

describe("testing adoptme", () => {
  describe("tests pets", () => {
    it("test POST cria um pet corretamente", async () => {
      const petMock = {
        name: "Rex",
        specie: "dog",
        birthDate: "10-10-2010",
      };
      const { statusCode, ok, _body } = await request
        .post("/api/pets")
        .send(petMock);
      //console.log(statusCode, ok, _body);
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.equal(true);
      expect(_body.payload).to.have.property("_id");
    });
    it("test GET retorna todos os pets corretamente", async () => {
      const { statusCode, ok, _body } = await request.get("/api/pets");
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.equal(true);
      expect(_body.payload).to.be.an("array");
    });
    it("test GET retorna um pet corretamente by id", async () => {
      const petMock = {
        name: "bolinha",
        specie: "dog",
        birthDate: "10-10-2010",
      };

      const pet = await request.post("/api/pets").send(petMock);
      console.log(pet.body.payload._id);
      const { statusCode, ok, _body } = await request.get(
        `/api/pets/${pet.body.payload._id}`
      );

      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.equal(true);
      expect(_body.payload).to.be.an("object")
      expect(_body.payload).to.have.property("_id");
      expect(_body.payload._id).to.be.equal(pet.body.payload._id);
    });
  });
});

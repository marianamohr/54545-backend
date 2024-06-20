import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const request = supertest("http://localhost:8080");

describe("testing adoptme", () => {
  /*describe("tests pets", () => {
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
      expect(_body.payload).to.be.an("object");
      expect(_body.payload).to.have.property("_id");
      expect(_body.payload._id).to.be.equal(pet.body.payload._id);
    });
  });*/
  describe("unprotected login", () => {
    it("erro ao tentar fazer um login sem o dado de email", async () => {
      const mockUser = { mail: "teste@teste.com", password: 123 };
      const { statusCode, _body } = await request
        .get("/api/sessions/unprotectedLogin")
        .send(mockUser);
      expect(statusCode).to.be.eql(400);
      expect(_body.error).to.be.eql("Incomplete values");
    });
    it("erro ao tentar fazer um login de uma pessoa nao cadastrada", async () => {
      const mockUser = { email: "teste@teste.com", password: 123 };
      const { statusCode, _body } = await request
        .get("/api/sessions/unprotectedLogin")
        .send(mockUser);
      //console.log(statusCode, _body);
      expect(statusCode).to.be.eql(404);
      expect(_body.error).to.be.eql("User doesn't exist");
    });
    it("erro ao tentar fazer um login com uma senha errada", async () => {
      const mockUser = {
        first_name: "Gui",
        last_name: "salzer",
        email: "guisalzer@gmail.com",
        password: "123",
      };
      //const register = await request
      //.post("/api/sessions/register")
      //.send(mockUser);
      const { statusCode, _body } = await request
        .get("/api/sessions/unprotectedLogin")
        .send({ email: mockUser.email, password: mockUser.password });
      console.log(statusCode, _body);
      //expect(statusCode).to.be.eql(404);
      //expect(_body.error).to.be.eql("User doesn't exist");
    });
  });
});

const  Router  = require("./router");

class GeralRouter extends Router {
  init() {
    this.get("/", (req, res) => {
      res.send("Hello World");
    });
  }
}

module.exports = GeralRouter;

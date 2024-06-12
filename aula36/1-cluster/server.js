const app = require("./src/app")
const config = require("./src/config/config");

app.listen(config.port, () => {
    console.log("Server is running on port 3000")
})
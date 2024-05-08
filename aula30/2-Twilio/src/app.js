const express = require("express");
const config = require("./config/config");

const twilio = require("twilio");

const client = twilio(config.twilioAccountSid, config.twilioAuthToken);

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.get("/sms", (req, res) => {
  //{
  //"message": "Aqui"
  // }
  const { message } = req.body;
  console.log(message);
  const result = client.messages.create({
    body: message,
    from: `whatsapp:${config.twilioPhoneNumber}`,
    to: "whatsapp:+5548996842356",
  });
  return res.send("Mensagem enviada");
});

module.exports = app;

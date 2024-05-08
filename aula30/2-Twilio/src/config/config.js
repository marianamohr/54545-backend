require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  gmailPasswd: process.env.GMAIL_PASSWD,
  twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
  twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
  twilioPhoneNumber: process.env.TWILIO_PHONE_NUMBER,
};
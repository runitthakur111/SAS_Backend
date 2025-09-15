const twilio = require('twilio');

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromPhone = process.env.TWILIO_PHONE;

const client = new twilio(accountSid, authToken);

const sendSMS = async (to, message) => {
  try {
    const result = await client.messages.create({
      body: message,
      from: fromPhone,
      to: to
    });
    console.log(`✅ SMS sent to ${to}`);
    return result;
  } catch (err) {
    console.error('❌ SMS failed:', err.message);
    throw err;
  }
};

module.exports = { sendSMS };

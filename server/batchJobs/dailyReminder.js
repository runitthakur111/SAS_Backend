// batchJobs/dailyReminder.js
const cron = require('node-cron');
const { getAppointmentsForTomorrow } = require('../services/appointmentService');
const { sendSMS } = require('../services/smsService');

cron.schedule('0 8 * * *', async () => {
  const appointments = await getAppointmentsForTomorrow();
  for (let appt of appointments) {
    await sendSMS(appt.phone, `Reminder: Your appointment is tomorrow at ${appt.time}`);
  }
});

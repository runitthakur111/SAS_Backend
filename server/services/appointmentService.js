const { Appointment } = require('../models');

const appointmentService = {
  // Create appointment
  async createAppointment(data) {
    return await Appointment.create(data);
  },

  // Get all appointments
  async getAllAppointments() {
    return await Appointment.findAll();
  },

  // Get appointment by ID
  async getAppointmentById(id) {
    return await Appointment.findByPk(id);
  },

  // Update appointment
  async updateAppointment(id, data) {
    const appointment = await Appointment.findByPk(id);
    if (!appointment) throw new Error('Appointment not found');
    return await appointment.update(data);
  },

  // Delete appointment
  async deleteAppointment(id) {
    const appointment = await Appointment.findByPk(id);
    if (!appointment) throw new Error('Appointment not found');
    return await appointment.destroy();
  }
};

module.exports = appointmentService;

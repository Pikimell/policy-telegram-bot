import AppointmentCollection from '../models/appointment.js';

const appointmentService = {
  async createAppointment(appointmentData) {
    try {
      const newAppointment = new AppointmentCollection(appointmentData);
      return await newAppointment.save();
    } catch (error) {
      console.error('Error creating appointment:', error);
      throw error;
    }
  },

  async findAppointmentById(appointmentId) {
    try {
      return await AppointmentCollection.findById(appointmentId);
    } catch (error) {
      console.error('Error finding appointment by ID:', error);
      throw error;
    }
  },

  async updateAppointment(appointmentId, updateData) {
    try {
      return await AppointmentCollection.findByIdAndUpdate(
        appointmentId,
        updateData,
        {
          new: true,
        },
      );
    } catch (error) {
      console.error('Error updating appointment:', error);
      throw error;
    }
  },

  async deleteAppointment(appointmentId) {
    try {
      return await AppointmentCollection.findByIdAndDelete(appointmentId);
    } catch (error) {
      console.error('Error deleting appointment:', error);
      throw error;
    }
  },

  async getAppointmentsByUserId(userId) {
    try {
      return await AppointmentCollection.find({ userId });
    } catch (error) {
      console.error('Error getting appointments by user ID:', error);
      throw error;
    }
  },

  async getAllAppointments(filters) {
    try {
      return await AppointmentCollection.find(filters);
    } catch (error) {
      console.error('Error getting all appointments:', error);
      throw error;
    }
  },
};

export default appointmentService;

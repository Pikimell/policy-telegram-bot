import { ConsultationCollection } from '../db/models/consultation.js'; // Імпортуємо модель Consultation

const consultationService = {
  async createConsultation(consultationData) {
    try {
      const newConsultation = new ConsultationCollection(consultationData);
      return await newConsultation.save();
    } catch (error) {
      console.error('Error creating consultation:', error);
      throw error;
    }
  },

  async findConsultationById(consultationId) {
    try {
      return await ConsultationCollection.findById(consultationId);
    } catch (error) {
      console.error('Error finding consultation by ID:', error);
      throw error;
    }
  },

  async updateConsultation(consultationId, updateData) {
    try {
      return await ConsultationCollection.findByIdAndUpdate(
        consultationId,
        updateData,
        { new: true },
      );
    } catch (error) {
      console.error('Error updating consultation:', error);
      throw error;
    }
  },

  async deleteConsultation(consultationId) {
    try {
      return await ConsultationCollection.findByIdAndDelete(consultationId);
    } catch (error) {
      console.error('Error deleting consultation:', error);
      throw error;
    }
  },

  async getConsultationsByUserId(userId) {
    try {
      return await ConsultationCollection.find({ userId });
    } catch (error) {
      console.error('Error getting consultations by user ID:', error);
      throw error;
    }
  },

  async getAllConsultations(filters) {
    try {
      return await ConsultationCollection.find(filters);
    } catch (error) {
      console.error('Error getting all consultations:', error);
      throw error;
    }
  },
};

export default consultationService;

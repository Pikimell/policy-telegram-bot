import { InteractionHistoryCollection } from '../db/models/history.js'; // Імпортуємо модель InteractionHistory

const historyService = {
  async createHistoryRecord(historyData) {
    try {
      const newRecord = new InteractionHistoryCollection(historyData);
      return await newRecord.save();
    } catch (error) {
      console.error('Error creating history record:', error);
      throw error;
    }
  },

  async getHistoryByUserId(userId) {
    try {
      return await InteractionHistoryCollection.find({ userId });
    } catch (error) {
      console.error('Error getting history by user ID:', error);
      throw error;
    }
  },

  async deleteHistoryByUserId(userId) {
    try {
      return await InteractionHistoryCollection.deleteMany({ userId });
    } catch (error) {
      console.error('Error deleting history by user ID:', error);
      throw error;
    }
  },

  async deleteHistoryById(historyId) {
    try {
      return await InteractionHistoryCollection.findByIdAndDelete(historyId);
    } catch (error) {
      console.error('Error deleting history by ID:', error);
      throw error;
    }
  },

  async getAllHistory(filters) {
    try {
      return await InteractionHistoryCollection.find(filters);
    } catch (error) {
      console.error('Error getting all interaction history:', error);
      throw error;
    }
  },
};

export default historyService;

import { ClaimCollection } from '../db//models/claim.js'; // Імпортуємо модель Claim

const claimService = {
  async createClaim(claimData) {
    try {
      const newClaim = new ClaimCollection(claimData);
      return await newClaim.save();
    } catch (error) {
      console.error('Error creating claim:', error);
      throw error;
    }
  },

  async findClaimById(claimId) {
    try {
      return await ClaimCollection.findById(claimId);
    } catch (error) {
      console.error('Error finding claim by ID:', error);
      throw error;
    }
  },

  async updateClaim(claimId, updateData) {
    try {
      return await ClaimCollection.findByIdAndUpdate(claimId, updateData, {
        new: true,
      });
    } catch (error) {
      console.error('Error updating claim:', error);
      throw error;
    }
  },

  async deleteClaim(claimId) {
    try {
      return await ClaimCollection.findByIdAndDelete(claimId);
    } catch (error) {
      console.error('Error deleting claim:', error);
      throw error;
    }
  },

  async getClaimsByUserId(userId) {
    try {
      return await ClaimCollection.find({ userId });
    } catch (error) {
      console.error('Error getting claims by user ID:', error);
      throw error;
    }
  },

  async getAllClaims(filters) {
    try {
      return await ClaimCollection.find(filters);
    } catch (error) {
      console.error('Error getting all claims:', error);
      throw error;
    }
  },
};

export default claimService;

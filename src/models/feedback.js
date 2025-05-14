import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  comment: { type: String },
  rating: { type: Number, default: 5 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Feedback', feedbackSchema);

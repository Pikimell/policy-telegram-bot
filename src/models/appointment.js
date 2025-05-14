import { Schema, model } from 'mongoose';

const appointmentSchema = new Schema({
  userId: { type: String, required: true },
  fullname: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  birthday: { type: String, required: true },
  policyName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'canceled'],
    default: 'scheduled',
  },
  createdAt: { type: Date, default: Date.now },
});

export default model('Appointment', appointmentSchema);

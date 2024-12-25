import { Schema, model } from 'mongoose';

const consultationSchema = new Schema(
  {
    userId: { type: String, required: true },
    topic: { type: String, required: true },
    scheduledAt: { type: Date },
    status: {
      type: String,
      enum: ['pending', 'completed', 'cancelled'],
      default: 'pending',
    },
    notes: { type: String },
  },
  { timestamps: true },
);

export const ConsultationCollection = model(
  'consultations',
  consultationSchema,
);

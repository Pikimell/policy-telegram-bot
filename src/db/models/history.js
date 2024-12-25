import { Schema, model } from 'mongoose';

const interactionHistorySchema = new Schema(
  {
    userId: { type: String, required: true },
    message: { type: String, required: true },
    response: { type: String, required: true },
  },
  { timestamps: true },
);

export const InteractionHistoryCollection = model(
  'interaction_histories',
  interactionHistorySchema,
);

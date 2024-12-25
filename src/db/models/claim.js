import { Schema, model } from 'mongoose';

const claimSchema = new Schema(
  {
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
    policyInfo: { type: String, required: true },
    documents: [{ type: String }],
    status: {
      type: String,
      enum: ['under review', 'approved', 'rejected'],
      default: 'under review',
    },
  },
  { timestamps: true },
);

export const ClaimCollection = model('claims', claimSchema);

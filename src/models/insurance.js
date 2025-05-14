import mongoose from 'mongoose';

const insuranceCaseSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true }, // Telegram ID користувача
    fullname: { type: String, required: true }, // Контактний номер користувача
    phoneNumber: { type: String, required: true }, // Контактний номер користувача
    caseType: { type: String, required: true }, // Тип випадку (авто, медичне тощо)
    description: { type: String, required: true }, // Опис ситуації
    status: {
      type: String,
      enum: ['pending', 'in_review', 'resolved'],
      default: 'pending', // Статус випадку
    },
    createdAt: { type: Date, default: Date.now }, // Дата створення
  },
  { timestamps: true }, // Додає `createdAt` і `updatedAt`
);

export default mongoose.model('InsuranceCase', insuranceCaseSchema);

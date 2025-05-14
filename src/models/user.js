import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true }, // Унікальний ідентифікатор користувача
    nickname: { type: String }, // Нікнейм користувача
    username: { type: String }, // Telegram username
    phone: { type: String }, // Номер телефону користувача
    language: { type: String, default: 'en' },
    registeredAt: { type: Date, default: Date.now },
  },
  { timestamps: false },
);

userSchema.index({ userId: 1 });

export const UserCollection = model('User', userSchema);

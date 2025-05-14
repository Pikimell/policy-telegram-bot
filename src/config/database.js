import mongoose from 'mongoose';

import {
  MONGODB_DB,
  MONGODB_PWD,
  MONGODB_URL,
  MONGODB_USER,
} from './enviroment.js';

export const initMongoDB = async () => {
  if (dbInfo.connected) {
    console.log('Already connected!');
    return;
  }

  try {
    const user = MONGODB_USER;
    const pwd = MONGODB_PWD;
    const url = MONGODB_URL;
    const db = MONGODB_DB;

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&ssl=true`,
    );

    console.log('Mongo connection successfully established!');
    dbInfo.connected = true;
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};

export const dbInfo = {
  connected: false,
};

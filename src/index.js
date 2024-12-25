import { dbInfo, initMongoDB } from './db/initMongoDb';

const init = async () => {
  if (!dbInfo.connected) {
    await initMongoDB();
  }
};

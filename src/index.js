import { initBotControllers } from './controllers/index.js';
import { dbInfo, initMongoDB } from './db/initMongoDb.js';

const init = async () => {
  if (!dbInfo.connected) {
    await initMongoDB();
  }

  initBotControllers();
};

init();

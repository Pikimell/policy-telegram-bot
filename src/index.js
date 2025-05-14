import { dbInfo, initMongoDB } from './config/database.js';

import './commands/index.js';
import './controllers/index.js';

const init = async () => {
  if (!dbInfo.connected) {
    await initMongoDB();
  }
};

init();

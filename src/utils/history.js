const history = {};

export function getHistory(userId) {
  return history[userId] || [];
}
export function addToHistory(userId, message) {
  history[userId] = history[userId] || [];

  history[userId].push(message);

  if (history[userId].length > 10) history.shift();
  return history[userId];
}

export function clearHistory(userId) {
  history[userId] = [];
}

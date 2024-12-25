const history = {};

export function getHistory(userId) {
  return history[userId] || [];
}
export function addToHistory(userId, message) {
  history[userId] = history[userId] || [];

  history[userId].push(message);

  if (history.length > 5) history.shift();
  return history[userId];
}

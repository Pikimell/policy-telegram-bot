export function getChatId(msg = {}) {
  return msg?.from?.id || msg?.chat?.id;
}

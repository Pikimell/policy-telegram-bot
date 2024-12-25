export function getChatId(msg = {}) {
  return msg?.from?.id || msg?.chat?.id;
}

export function parseAnswer(answer) {
  answer = answer.trim();

  if (answer.startsWith('```')) {
    answer = answer.slice(7, -3);
  }

  return answer;
}

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

export function parseJson(str) {
  const firstIndex = str.indexOf('{');
  const lastIndex = str.lastIndexOf('}');

  if (firstIndex === -1) return null;

  try {
    const json = str.slice(firstIndex, lastIndex + 1);
    return JSON.parse(json);
  } catch {
    return null;
  }
}

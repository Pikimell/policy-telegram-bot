import { trigger } from '../../helpers/triggers.js';

const aiTrigger = trigger.openai;

function handleCreateClaim(answer, chatId) {
  console.log(answer);
}

export async function checkAnswer(answer, chatId) {
  if (answer.startsWith(aiTrigger.newClaim)) {
    handleCreateClaim(answer, chatId);
    return true;
  } else if (answer.startsWith()) {
  } else if (answer.startsWith()) {
  } else if (answer.startsWith()) {
  } else if (answer.startsWith()) {
  } else if (answer.startsWith()) {
  } else if (answer.startsWith()) {
  } else if (answer.startsWith()) {
  } else if (answer.startsWith()) {
  } else if (answer.startsWith()) {
  } else if (answer.startsWith()) {
  }
  return false;
}

export default function (answer = '', trigger = '') {
  const check1 = answer.startsWith(trigger);
  const check2 = answer.includes(trigger.slice(1));
  return check1 || check2;
}

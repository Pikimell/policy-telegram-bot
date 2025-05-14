export const createAppointment = (obj) => {
  const message = `Якщо все вірно, натисніть на кнопку відправити заявку
🔹Повне імя: ${obj?.fullname};
🔹Номер телефону: ${obj?.phoneNumber};
🔹Дата народження: ${obj?.birthday};
🔹Пошта: ${obj?.email};`;
  return message;
};
export const adminAppointment = (obj) => {
  const { phoneNumber, policyName, email, birthday, fullname } = obj;

  const message = `Нова заявка на поліс:
🔹Поліс: ${policyName}
🔹Ім'я: ${fullname}
🔹Email: ${email}
🔹Телефон: ${phoneNumber}
🔹Дата народження: ${birthday}`;
  return message;
};

export const saveFeedback = () => {
  return `Дякуємо за відгук☺️`;
};
export const saveClaim = () => {
  return `Ваш запит прийнято. Найблишчим часом Вам зателефонує менеджер.`;
};

export const saveAdminClaim = (obj) => {
  const { description, caseType, phoneNumber, fullname } = obj;
  const message = `Нова заявка на страховий випадок:
🔹Тип випадку: ${caseType}
🔹Опис: ${description}
🔹Ім'я: ${fullname}
🔹Телефон: ${phoneNumber}`;
  return message;
};

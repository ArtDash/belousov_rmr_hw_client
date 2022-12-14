export enum ErrorValidationMessage {
  NO_EMAIL = "Поле Email является обязательным",
  NO_PHONE = "Поле Phone является обязательным",
  NO_PASSWORD = "Введите пароль",
  WRONG_EMAIL = "Неправильный формат email",
  WRONG_PHONE = "Неправильный формат телефона. Убедитесь, что код соответствует коду России или Монголии",
  WRONG_PASSWORD = "Пароль должен содержать минимум 4 символа и состоять только из букв и цифр",
  BAD_REQUEST = "Что-то пошло не так! Возможно вы ввели неправильные данные или данный пользователь не зарегистрирован",
}

export enum RequestErrors {
  FORBIDDEN = 403,
  UNAUTHORIZED = 401,
}

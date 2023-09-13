// минимальная валидация для примера
export const validation = {
  fullName: {
    required: 'Field is required',
    pattern: {
      value: /^\s*[A-Z][a-z]+(\s+[A-Z][a-z]+)?\s*$/,
      message: 'Invalid name',
    },
  },
  email: {
    required: 'Field is required',
    pattern: {
      value: /^\s*\w{2,}@\w{2,}\.\w{2,}\s*$/i,
      message: 'Invalid email',
    },
  },
  message: {
    required: 'Field is required',
    minLength: {
      value: 25,
      message: `Min length: 25`,
    },
    maxLength: {
      value: 2000,
      message: 'Max length: 2000',
    },
  },
};

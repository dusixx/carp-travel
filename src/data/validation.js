export const validation = {
  fullName: {
    required: 'Field is required',
    pattern: {
      value: /^\s*[A-Z][a-z]+(\s+[A-Z][a-z]+)?\s*$/,
      message: 'Invalid name',
    },
    maxLength: {
      value: 150,
      message: 'Max length: 150',
    },
  },

  position: {
    required: 'Field is required',
    pattern: {
      value: /^\s*[a-z][a-z]+(\s+[a-z][a-z]*)*\s*$/i,
      message: 'Invalid position',
    },
    maxLength: {
      value: 150,
      message: 'Max length: 150',
    },
  },

  email: {
    required: 'Field is required',
    pattern: {
      value: /^\s*\w{2,}@\w{2,}\.\w{2,}\s*$/i,
      message: 'Invalid email',
    },
  },

  phone: {
    required: 'Field is required',
    // pattern: {
    //   value: /^\s*[A-Z][a-z]+(\s+[A-Z][a-z]+)?\s*$/,
    //   message: 'Invalid name',
    // },
    // maxLength: {
    //   value: 150,
    //   message: 'Max length: 150',
    // },
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

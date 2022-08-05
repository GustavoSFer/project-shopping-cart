const isValidEmail = (email) => {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  return regex.test(email);
};

const isValidPassword = (minLength, password) => (password.length > minLength);

export {
  isValidEmail,
  isValidPassword,
};

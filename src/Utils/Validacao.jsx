const isValidEmail = (email) => {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  return regex.test(email);
};

const isValidPassword = (password, minLength = 0) => (password.length > minLength);

const isValidName = (name, minLength = 1) => (name.length > minLength);

const isValidPhone = (phone) => {
  if (!Number.isNaN(Number(phone))) {
    if (phone.length > 9 && phone.length < 12) {
      return true;
    }
  }
  return false;
};

export {
  isValidEmail,
  isValidPassword,
  isValidName,
  isValidPhone,
};

export const isValidName = (name) => {
  if (typeof name === "string") {
    name = name.trim();
    if (name.length >= 3) return name;
  }
  return false;
};

export const isValidEmail = (email) => {
  const regex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/gm;
  if (typeof email === "string") {
    email = email.trim();
    if (regex.test(email)) {
      return email.trim();
    }
  }
  return false;
};

export const isValidPhone = (phone) => {
  if (typeof phone === "string") {
    phone = phone.trim();
    if (phone.length === 10) {
      return phone;
    }
  }
  return false;
};

export const isValidPassword = (password) => {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (typeof password === "string" && passwordRegex.test(password)) {
    return password;
  }
  return false;
};

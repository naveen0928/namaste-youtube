export const validateFormData = (email, password) => {
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!emailRegex && !passwordRegex) return "Please enter email and password";
  if (!emailRegex) return "Email Id is not valid";
  if (!passwordRegex) return "Password in not valid";
  return null;
};

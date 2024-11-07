export const phoneNumberRegulation = (phoneNumber: string) => {
  const phoneFormatter = /^[0-9-]*$/;
  return phoneFormatter.test(phoneNumber);
};

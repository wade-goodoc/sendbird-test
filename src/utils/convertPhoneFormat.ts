export const convertPhoneFormat = (phone: string, format = '') => {
  if (!phone) return phone;
  const phoneWithoutHyphen = phone.replace(/[-]/g, '');

  const result = phoneWithoutHyphen.startsWith('1')
    ? phoneWithoutHyphen.replace(/(^1\d{3})(\d{4})$/, `$1${format}$2`)
    : phoneWithoutHyphen.replace(
        /(^0504|^0505|^02|^0\d{2}|\d{3})(\d{3,4})(\d{4})$/,
        `$1${format}$2${format}$3`
      );

  return result;
};

export const convertInternationalPhoneFormat = (
  phone: string,
  locale = '82',
  format = ''
) => {
  if (!phone) return phone;
  const phoneWithoutHyphen = phone.replace(/[-]/g, '');

  const result = phoneWithoutHyphen
    .replace(/^0/, '')
    .replace(
      /(^504|^505|^2|^\d{2}|\d{2})(\d{3,4})(\d{4})$/,
      `+${locale}$1${format}$2${format}$3`
    );

  return result;
};

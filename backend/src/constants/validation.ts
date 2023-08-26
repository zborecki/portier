export const validate = (
  text: any,
  regex: RegExp,
  errorMessage: string,
) => {
  if (!text) return false || 'This field is required.';

  return regex.test(text.toString()) || errorMessage;
};

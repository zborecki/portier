export const getCurrentRoute = (slug: string): string => {
  const regex = /[a-zA-Z0-9]/;

  if (regex.test(slug) && slug.startsWith('/')) {
    return slug.substring(1);
  }

  return slug;
};

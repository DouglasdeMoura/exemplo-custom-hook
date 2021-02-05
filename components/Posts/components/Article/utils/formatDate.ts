const formatDate = (dateStr, locale) => {
  try {
    const date = new Date(dateStr);
    return date.toLocaleString(locale);
  } catch (error) {
    throw new Error("Unable to format date");
  }
};

export default formatDate;

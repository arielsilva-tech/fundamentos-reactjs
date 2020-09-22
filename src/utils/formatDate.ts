const formatDate = (date: string | Date): string => {
  const dateValue = typeof date === 'string' ? Date.parse(date) : date;
  const dateFormated = new Intl.DateTimeFormat('br-pt').format(dateValue);
  return dateFormated;
};

export default formatDate;

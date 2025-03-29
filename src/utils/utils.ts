export const getHourMiutuesFromDate = (startDate: Date, endDate: Date) => {
  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  };

  const startHour = formatTime(startDate);
  const endHour = formatTime(endDate);

  return `${startHour} - ${endHour}`;
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  });
};

export const formatDateWithoutDay = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

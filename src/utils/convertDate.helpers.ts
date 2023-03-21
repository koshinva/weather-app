export const convertDate = (date: number, type?: 'H:M' | 'W,MD') => {
  const currentDate = new Date(date * 1000);
  if (type === 'H:M') {
    return `${currentDate.getHours()}:${String(currentDate.getMinutes()).padStart(2, '0')}`;
  }
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  if (type === 'W,MD') {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return `${weekDays[currentDate.getDay()]}, ${
      months[currentDate.getMonth()]
    } ${currentDate.getDate()}`;
  }
  return `${weekDays[currentDate.getDay()]}`;
};

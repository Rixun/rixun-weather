export const getWeekDay = (day) => {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return weekday[day];
};
export const getShortenedWeekDay = (day) => {
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  return weekday[day];
};

export const getCurrentRoundedDownHourIndex = () => {
  const currentHour = new Date();
  currentHour.setMinutes(0, 0, 0);
  return currentHour.getHours();
};

export const convertIndexToHour = (index) => {
  const timePeriod = index < 12 ? 'am' : 'pm';
  const hour = index % 12 || 12;
  return `${hour} ${timePeriod}`;
};

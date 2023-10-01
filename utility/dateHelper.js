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

  if (day === new Date().getDay())
    weekday[day] = 'Today';

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

export const convertHourTo24Hour = (hour) => {
  return hour % 24;
};

export const convertIndexToHour = (index) => {
  const convertedIndex = convertHourTo24Hour(index);
  const timePeriod = convertedIndex < 12 ? 'am' : 'pm';
  const hour = convertedIndex % 12 || 12;
  return `${hour} ${timePeriod}`;
};

export function formatTime(timeString) {
  const [hours, minutes] = timeString.split(':');
  const hoursNumber = Number(hours);
  const period = hoursNumber >= 12 ? 'PM' : 'AM';
  const hoursConverted = hoursNumber % 12 || 12;
  const hoursFormatted = hoursConverted < 10 ? `0${hoursConverted}` : hoursConverted;
  return `${hoursFormatted}:${minutes} ${period}`;
}

export function formatWeeklyDate(dateString) {
  const [, month, date] = dateString.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthIndex = Number(month) - 1;
  return `${date} ${months[monthIndex]}`;
}

export function formatCurrentDate(dateString) {
  const [year, month, date] = dateString.split('-');

  const newDate = new Date(`${year}-${month}-${date}`);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const targetDay = days[newDate.getDay()];
  const targetMonth = months[newDate.getMonth()];

  return `${targetDay}, ${date} ${targetMonth}`;
}

export function tempFormat(tempValue) {
  const tempNumber = Number(tempValue);
  const tempC = ((tempNumber - 32) * 5) / 9;
  const tempFormatted = tempC.toFixed(0);
  return `${tempFormatted}°C`;
}

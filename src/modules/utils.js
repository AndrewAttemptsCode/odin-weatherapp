export function formatTime(timeString) {
  const [hours, minutes] = timeString.split(':');
  const hoursNumber = Number(hours);
  const period = hoursNumber >= 12 ? 'PM' : 'AM';
  const hoursConverted = hoursNumber % 12 || 12;
  const hoursFormatted = hoursConverted < 10 ? '0' + hoursConverted : hoursConverted;
  return `${hoursFormatted}:${minutes} ${period}`;
}

export function formatWeeklyDate(dateString) {
  const [, month, day] = dateString.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthIndex = Number(month) - 1;
  return `${day} ${months[monthIndex]}`;
}

export function formatCurrentDate(dateString) {
  const [, month, day] = dateString.split('-');
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthIndex = Number(month) - 1;
  return `${day} ${months[monthIndex]}`;
}

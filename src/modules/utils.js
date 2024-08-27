export function formatTime(timeString) {
  const [hours, minutes] = timeString.split(":");
  const hoursNumber = Number(hours);
  const period = hoursNumber >= 12 ? "PM" : "AM";
  const hoursConverted = (hoursNumber % 12 || 12);
  const hoursFormatted = hoursConverted < 10 ? "0" + hoursConverted : hoursConverted;
  return `${hoursFormatted}:${minutes} ${period}`;
}
export function FormatArisDate(dateString) {
  const datePart = dateString.substring(0, 8);

  const year = parseInt(datePart.substring(0, 4));
  const month = parseInt(datePart.substring(4, 6)) - 1; // Month is zero-based in JavaScript Date object
  const day = parseInt(datePart.substring(6, 8));

  const originalDate = new Date(year, month, day);

  const formattedDay = originalDate.getDate().toString().padStart(2, '0');
  const formattedMonth = new Intl.DateTimeFormat("en-US", { month: "long" }).format(originalDate);
  const formattedYear = originalDate.getFullYear();

  const formattedDateTime = `${formattedDay} ${formattedMonth} ${formattedYear}`;

  return formattedDateTime;
}
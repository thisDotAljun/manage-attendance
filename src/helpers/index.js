export const formatDateString = (inputString) => {
  const inputDate = new Date(inputString);

  if (isNaN(inputDate)) {
    console.error("Invalid date string");
    return null;
  }

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const month = months[inputDate.getMonth()];
  const day = inputDate.getDate();
  const year = inputDate.getFullYear();

  const formattedDate = `${month} ${day < 10 ? '0' : ''}${day}, ${year}`;

  return formattedDate;
};
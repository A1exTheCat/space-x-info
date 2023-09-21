// Utility function to convert a date string into a formatted date string
export const dateConvertor = (dateString) => {
  // Create a new Date object from the input dateString
  const date = new Date(dateString);

  // Get the day, month, and year components from the date object
  // Use padStart to make sure day and month are two digits
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  // Construct the formatted date string in 'DD.MM.YYYY' format
  const formattedDate = `${day}.${month}.${year}`;

  // Return the formatted date string
  return formattedDate;
};

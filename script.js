let userInput = document.getElementById("date");
// Setting last date to today's date
userInput.max = new Date().toISOString().split("T")[0]; 
let display = document.getElementById("display");

function main() {
  //condition for not selecting valid date
  if (!userInput.value) {
    display.innerHTML = "Please select a valid date!";
    return;
  }
  // user input of his date of birth
  let dob = new Date(userInput.value); 
  let birthYear = dob.getFullYear();
  // Months are 0-indexed, so add 1 to birthMonth
  let birthMonth = dob.getMonth() + 1; 
  let birthDate = dob.getDate();


  // Today's date
  let today = new Date(); 
  let todayYear = today.getFullYear();
  let todayMonth = today.getMonth() + 1;
  let todayDate = today.getDate();

  let years = todayYear - birthYear;
  let months;
  let days;

  // Calculate months
  if (todayMonth >= birthMonth) {
    months = todayMonth - birthMonth;
  } else {
    years--;
    months = 12 + (todayMonth - birthMonth);
  }

  // Calculate days
  if (todayDate >= birthDate) {
    days = todayDate - birthDate;
  } else {
    months--;
    days = getDaysInMonth(birthYear, birthMonth) + (todayDate - birthDate);
  }

  // Adjusting condition   if months is negative
  if (months < 0) {
    months = 11;
    years--;
  }

  // Display the result
  display.innerHTML = `Your age is ${years} years, ${months} months, and ${days} days.`;
}


 //creating function to Get the last date of the previous month
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate(); 
}

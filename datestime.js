let val;

const today = new Date(); // gets today's date
let birthday = new Date('9-10-1981 11:25:00'); // can add time as well
birthday = new Date('September 10 1981 11:25:00');
birthday = new Date('9/10/1981 11:25:00');

val = today.getMonth(); // 0 based so January = 0
val = today.getDate(); // Day of the month
val = today.getDay(); // Starts the week on Sunday
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getTime(); // timestamp

birthday.setMonth(2); // Sets it to march
birthday.setDate(12);
birthday.setFullYear(1998);

console.log(val);

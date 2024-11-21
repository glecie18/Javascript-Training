const money = 9;
const today = 'Friday';

if (today === 'Friday' && money < 10) {
  alert("It's Friday, but I don't have enough money to go out.");
} else if (money >= 50) {
  alert("Time for a movie and dinner.");
} else if (money > 10) {
  alert("Time to go to the theater.");
} else {
  alert("This isn't Friday. I need to stay home.");
}
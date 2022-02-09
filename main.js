const color_combine = require("./main2");

const prompt = require("prompt-sync")();

let greet = prompt(
  "Hello, this app allows you to find out what two colors you can construct to make one color or what one color deconstructs too.  Press Enter "
);

let choice = Number(
  prompt("Type one for color-combinator or type two for color-deconstructor: ")
);

if (choice === one) {
  prompt(one);
} else if (choice === two) {
  prompt(two);
}

let one = prompt("Choose two colors to combine to one color: ");

let second = prompt("Choose a second color: ");

let two = prompt("purple, orange, green, Please choose one of these colors: ");

let red = "red";
let blue = "blue";
let orange = "orange";
let green = "green";
let yellow = "yellow";

if (two === purple) {
  prompt(
    'Colors deconstruct to "RED" and "BLUE" press enter to choose another color.'
  );
} else if (two === orange) {
  prompt(
    'Colors deconstruct to "RED" and "Yellow" press enter to choose another color.'
  );
} else if (two === green) {
  prompt(
    'Colors deconstruct to "BLUE" and "Yellow" press enter to choose another color.'
  );
} else {
  prompt('Please choose a valid color, "PURPLE", "ORANGE" "GREEN"!');
}

if ((one === red && second === blue) || (second === red && one === blue)) {
  prompt("This combines to create Purple!");
} else if (
  (one === red && second === yellow) ||
  (second === red && one === yellow)
) {
  prompt("This combines to create Orange!");
} else if (
  (one === blue && second === yellow) ||
  (one === yellow && second === blue)
) {
  prompt("This combines to create Green");
}

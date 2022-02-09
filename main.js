const prompt = require("prompt-sync")();

let greet = Number(prompt(
  "Enter [1] for color constructor.  Enter [2] for color deconstructor: "
));

if (greet === 1) {  

  prompt("Available colors are: Red, Blue, and Yellow: Press Enter");

  let color1 = prompt("Enter the first color: ");
  let color2 = prompt("Enter the second color: ");

  if (color1 === "red" && color2 === "blue" || color1 === "blue" && color1 === "red") {
      prompt("Purple")
  } else if (color1 === "red" && color2 === "yellow" || color1 === "yellow" && color1 === "red") {
      prompt("Orange");
  } else if (color1 === "blue" && color2 === "yellow" || color1 === "yellow" && color2 === "blue") {
      prompt("Green")
  } else {
      console.log("Error");
  }

} else if (greet === 2) {

    let color3 = (prompt("Enter color to be deconstructed, purple, orange, and green: "));

    if (color3 === "purple") {
        prompt("Red & Blue: [Press ENTER to exit]");
    } else if (color3 === "orange") {
        prompt("Red & Yellow: [Press ENTER to exit]")
    } else if (color3 === "green") {
        prompt("Blue and Yellow: [Press ENTER to exit]")
    } else {
        console.log("Error");
    }
}




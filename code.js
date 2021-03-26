// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Create your own Madlibs story!

let royalty = prompt("Enter a type of Royalty such as a Princess or King:");
let creature = prompt("Enter any type of creature:");
let weather = prompt("Enter a type of weather:");
let place = prompt("Enter a type of place:")
let food = prompt("Enter your favorite food:")

document.write("Here is my short story!<br>");
document.write(
  "Once there was a " +
    royalty +
    " who decided to take a walk to the " +
    place +
    ". It was a " +
    weather +
    " day as the " + royalty + " set out for the " + place + 
    ". However, it wasnt long before they realized they were hungry for " + food + 
    ". As they made their way to the " + food + " shop, they came across a " + creature +
    ". The " + creature +" begged for some food from the kind " + royalty + 
    ". The " + royalty + " happily shared their " + food + " with the " + creature +
    ". Then they all lived happily ever after, or something like that."
    
);

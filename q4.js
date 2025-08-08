let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let num3 = Number(prompt("Enter third number"));

if (num1 >= num2) {
    if (num1 >= num3) {
        alert("First number is the largest: " + num1);
    } else {
        alert("Third number is the largest: " + num3);
    }
} else {
    if (num2 >= num3) {
        alert("Second number is the largest: " + num2);
    } else {
        alert("Third number is the largest: " + num3);
    }
}

let a = Number(prompt("Enter side a:"));
let b = Number(prompt("Enter side b:"));
let c = Number(prompt("Enter side c:"));

if (a + b > c && a + c > b && b + c > a) {
    alert("The triangle is valid.");
} else {
    alert("The triangle is NOT valid.");
}

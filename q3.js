let marks = Number(prompt("Enter your marks (0–100):"));

if (marks >= 90 && marks <= 100) {
    alert("Grade: A");
} else if (marks >= 75 && marks < 90) {
    alert("Grade: B");
} else if (marks >= 60 && marks < 75) {
    alert("Grade: C");
} else if (marks >= 33 && marks < 60) {
    alert("Grade: D");
} else if (marks >= 0 && marks < 33) {
    alert("Fail");
} else {
    alert("Invalid input");
}

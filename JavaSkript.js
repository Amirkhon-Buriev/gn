function compareNumbers() {
    let num1 = prompt("1-sonni kiriting:");
    let num2 = prompt("2-sonni kiriting:");

    if (num1 > num2) {
        alert("Eng katta son: " + num1);
    } else if (num1 < num2) {
        alert("Eng katta son: " + num2);
    } else {
        alert("Ikkalasi bir biriga teng.");
    }
}

compareNumbers()
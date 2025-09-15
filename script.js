function factorialReduce() {
    const num = parseInt(document.getElementById('number').value);
    if (isNaN(num) || num < 0) {
        document.getElementById('output').innerText = "Please enter a valid non-negative number.";
        return;
    }

    if (num === 0 || num === 1) {
        document.getElementById('output').innerText = `Factorial of ${num} (Reduce): 1`;
        return;
    }

    const arr = Array.from({ length: num }, (_, i) => i + 1);
    const result = arr.reduce((acc, val) => acc * val, 1);
    const steps = arr.reverse().join(" × ");

    document.getElementById('output').innerText =
        `Steps: ${steps}\nFactorial of ${num} (Reduce): ${result}`;
}

function factorialLoop() {
    const num = parseInt(document.getElementById('number').value);
    if (isNaN(num) || num < 0) {
        document.getElementById('output').innerText = "Please enter a valid non-negative number.";
        return;
    }

    let result = 1;
    let steps = [];
    for (let i = num; i >= 1; i--) {
        result *= i;
        steps.push(i);
    }

    document.getElementById('output').innerText =
        `Steps: ${steps.join(" × ")}\nFactorial of ${num} (Loop): ${result}`;
}

function resetCalculator() {
    document.getElementById('number').value = "";
    document.getElementById('output').innerText = "Result will appear here";
}

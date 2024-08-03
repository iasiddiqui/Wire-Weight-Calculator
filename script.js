function calculateWeight() {
    const density = parseFloat(document.getElementById('density').value);
    const size = parseFloat(document.getElementById('size').value);
    const length = parseFloat(document.getElementById('length').value);
    const bobbin = parseFloat(document.getElementById('bobbin').value);

    if (isNaN(density) || isNaN(size) || isNaN(length) || isNaN(bobbin)) {
        alert('Please fill out all fields correctly.');
        return;
    }

    const wireDia = size / 10; // Convert wire diameter from mm to cm
    const wireDensity = density; // Wire density in kg/cm³
    const drawnLength = length * 100000; // Convert drawn length from km to cm
    const numberOfBobbins = bobbin;

    const netWeight = wireDia * wireDia * 0.785 * wireDensity * drawnLength * numberOfBobbins / 1000; // Divide by 1000 to convert from grams to kg

    document.getElementById('result').textContent = `Net Weight: ${netWeight.toFixed(1)} kg`;
}

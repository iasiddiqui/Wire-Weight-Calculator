function calculateWeight() {
    const density = parseFloat(document.getElementById('density').value);
    const size = parseFloat(document.getElementById('size').value);
    const length = parseFloat(document.getElementById('length').value);
    const bobbin = parseFloat(document.getElementById('bobbin').value);

    if (isNaN(density) || isNaN(size) || isNaN(length) || isNaN(bobbin)) {
        alert('Please fill out all fields correctly.');
        return;
    }

    const radius_cm = size / 10; // Convert mm to cm
    const area_cm2 = Math.PI * Math.pow(radius_cm / 2, 2); // Cross-sectional area in cm²
    const volume_cm3 = area_cm2 * (length * 100000); // Volume in cm³ (length in km to cm)
    const weight_kg = density * volume_cm3; // Weight in kg

    const netWeight = weight_kg * bobbin;

    document.getElementById('result').textContent = `Net Weight: ${netWeight.toFixed(5)} kg`;
}

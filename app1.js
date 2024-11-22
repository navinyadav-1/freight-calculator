document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve input values
    const distance = parseFloat(document.getElementById('distance').value);
    const toll = parseFloat(document.getElementById('toll').value);
    const mileage = parseFloat(document.getElementById('mileage').value);
    const fuelCost = parseFloat(document.getElementById('fuelCost').value);
    const driverCost = parseFloat(document.getElementById('driverCost').value);
    const truckCost = parseFloat(document.getElementById('truckCost').value);
    const capacity = parseFloat(document.getElementById('capacity').value);
    const profitFactor = parseFloat(document.getElementById('profitFactor').value) || 0; // Default to 0 if no value is entered

    // Calculate Total Distance
    const totalDistance = 2 * distance;

    // Calculate Total Fuel Cost
    const totalFuelCost = (totalDistance / mileage) * fuelCost;

    // Calculate Total Driver Cost
    const totalDriverCost = totalDistance * driverCost;

    // Calculate Total Truck Cost
    const totalTruckCost = totalDistance * truckCost;

    // Calculate Total Cost
    let totalCost = totalTruckCost + totalDriverCost + totalFuelCost + toll;

    // Apply Profit Factor if entered
    if (profitFactor > 0) {
        totalCost += totalCost * (profitFactor / 100);
    }

    // Display the results (you can modify this to show results in a different format or element)
    alert(`Total Distance: ${totalDistance} km\n` +
          `Total Fuel Cost: ₹${totalFuelCost.toFixed(2)}\n` +
          `Total Driver Cost: ₹${totalDriverCost.toFixed(2)}\n` +
          `Total Truck Cost: ₹${totalTruckCost.toFixed(2)}\n` +
          `Toll: ₹${toll}\n` +
          `Profit Factor: ${profitFactor}%\n` +
          `Total Cost (with Profit): ₹${totalCost.toFixed(2)}`);
});

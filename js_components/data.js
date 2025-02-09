// time and date function
function updateDate() {
    const now = new Date();
    document.getElementById("date").innerHTML =
        `Date: <br>${now.toLocaleDateString()} <br> ${now.toLocaleTimeString()}`;
}
setInterval(updateDate, 1000);
updateDate(); // Run initially



// speed funtion
// global flag to stop speed updates
let emergencyActivated = false;
let speed = 0;
function updateSpeed() {
    if (!emergencyActivated) {
        document.getElementById("speed").innerHTML = `Speed: <br>${speed} km/h`;
    }
}
setInterval(updateSpeed, 100);
updateSpeed();



// weather function
async function fetchTemperature() {
    const apiKey = "52831c3174e5b216674cbeca6f3bf001";
    const city = "Cairo";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    console.log("Fetching:", url);

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data);

        if (!data.main || !data.main.temp) {
            throw new Error("Invalid API response structure.");
        }

        const temp = data.main.temp;
        document.getElementById("temp").innerHTML = `Temperature: <br>${temp}°C`;

    } catch (error) {
        console.error("Error fetching temperature:", error);
        document.getElementById("temp").innerHTML = "Temperature: <br>Unable to fetch";
    }
}
fetchTemperature();
setInterval(fetchTemperature, 60000*5); // Update temperature every 5 minute
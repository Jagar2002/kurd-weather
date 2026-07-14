const apiKey = "002cca85265241a798b05915261407";

async function getWeather() {
    const city = document.getElementById("city").value;

    if (!city) {
        alert("تکایە ناوی شار بنووسە");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("result").innerHTML = `
            <h3>${data.location.name}</h3>
            <img src="https:${data.current.condition.icon}">
            <p>🌡️ ${data.current.temp_c}°C</p>
            <p>☁️ ${data.current.condition.text}</p>
            <p>💨 ${data.current.wind_kph} km/h</p>
            <p>💧 ${data.current.humidity}%</p>
        `;
    } catch (error) {
        document.getElementById("result").innerHTML =
            "هەڵەیەک ڕوویدا.";
    }
}

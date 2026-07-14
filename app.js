const apiKey = "002cca85265241a798b05915261407";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
    const city = cityInput.value.trim();

    if (!city) {
        alert("تکایە ناوی شار بنووسە.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kr`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod != 200) {
            alert("شار نەدۆزرایەوە.");
            return;
        }

        document.getElementById("weather-card").innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 پلەی گەرمی: ${data.main.temp}°C</p>
            <p>☁️ دۆخی کەش: ${data.weather[0].description}</p>
            <p>💧 شێداری: ${data.main.humidity}%</p>
            <p>💨 خێرایی با: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        alert("هەڵەیەک ڕوویدا.");
    }
}

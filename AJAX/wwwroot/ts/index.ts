import $ from "jquery";
import Cookies from "js-cookie";

interface Coord {
    lon: number;
    lat: number;
}

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

interface Wind {
    speed: number;
    deg: number;
    gust: number;
}

interface Rain {
    "1h": number;
}

interface Clouds {
    all: number;
}

interface Sys {
    country: string;
    sunrise: number;
    sunset: number;
}

interface WeatherResponse {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    rain: Rain;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

$(function f()
{
    let routes: Map<string, () => void> = new Map<string, () => void>();
    let $main = $("main");

    routes.set("/FBES_1213_JS/AJAX/pages/index.html", () => {
        const apiKey: string = "584993864b9139ccdf1bede8068a8a57";

        let $lat = $("#weather-lat");
        let $lon = $("#weather-lon");
        let $getWeather = $("#get-weather");
        let $weatherData = $("#weather-data");

        $getWeather.on("click", (e) => {
            let lat = $lat.val();
            let lon = $lon.val();

            // TODO: Add validation for lat lon

            $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`).done((data) => {
                let response: WeatherResponse = data;

                $weatherData.empty();
                $weatherData.append(`<div>City: ${response.name}\nTemp: ${(response.main.temp * 5 / 9) - 32}\nWind speed: ${response.wind.speed}</div>`);
            });
        });

        $.get("../data/data.json", data => {
            console.log(data);
        });

        // $.ajax({
        //     url: `https://api.openweathermap.org/data/2.5/weather?lat=40&lon=50&appid=${apiKey}`,
        //     error: (e) => {
        //         console.log("FAILED");
        //     },
        //     success: (data) => {
        //         let obj: WeatherResponse = data;
        //
        //         console.log(obj.sys.country);
        //     },
        //     complete: (e) => {
        //         console.log("COMPLETE");
        //     },
        //     method: "GET",
        //     crossDomain: true,
        // });
    });

    let result = routes.get(window.location.pathname);

    if (result !== undefined)
    {
        result();
    }
});
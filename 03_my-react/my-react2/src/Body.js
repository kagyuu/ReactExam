import './App.css';
import React, { useState, useEffect } from "react";
import { API_KEY } from './Secrets';

// OpenWeatherMap API のキーは、Secrets.js に次のように定義する
// export const API_KEY = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
// Secrets.js は .gitignore にしています
// API Key は各自 https://openweathermap.org/api の Current Weather Data (無料) を取得してください

// 日本の主要都市のリスト
const CITIES = [
    "Sapporo",
    "Sendai",
    "Tokyo",
    "Nagoya",
    "Kyoto",
    "Osaka",
    "Kobe",
    "Hiroshima",
    "Fukuoka",
    "Okinawa"
];

// 天気予報を表示するコンポーネント
function Weather({city}) {
    // 天気データを保持するステート
    const [weather, setWeather] = useState(null);
  
    // API から天気データを取得する関数
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},JP&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    // コンポーネントがマウントされたときに API から天気データを取得する
    useEffect(() => {
      fetchWeather();
    }, []);
  
    // 天気データがない場合はローディングを表示する
    if (!weather) {
      return <div>Loading...</div>;
    }
  
    // 天気データがある場合は、都市名、気温、天気アイコン、天気説明を表示する
    return (
      <div className="weather">
        <h2>{city}</h2>
        <p>{weather.main.temp} ℃</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt={weather.weather[0].description}
        />
        <p>{weather.weather[0].description}</p>
      </div>
    );
  };

export default function Body() {
    return (
        <>
        {CITIES.map((elem,idx) => (
            <Weather city={elem}/>
        ))}
        </>
    );
}
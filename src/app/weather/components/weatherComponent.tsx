import React, { ReactNode, useCallback, useState } from "react";
import "./css/weatherCp.css";
// import { WeatherIcons } from "../page";
import { Cookies, useCookies } from "react-cookie";
import Image from "next/image";

const cookies = new Cookies();

export const WeatherInfoIcons = {
  sunset: "my-weather-app/icon/temp.svg",
  sunrise: "my-weather-app/icon/temp.svg",
  humidity: "my-weather-app/icon/humidity.svg",
  wind: "my-weather-app/icon/wind.svg",
  pressure: "my-weather-app/icon/pressure.svg",
};

type ObjType = {
  [index: string]: string;
  "01d": string;
  "01n": string;
  "02d": string;
  "02n": string;
  "03d": string;
  "03n": string;
  "04d": string;
  "04n": string;
  "09d": string;
  "09n": string;
  "10d": string;
  "10n": string;
  "11d": string;
  "11n": string;
  "13d": string;
  "13n": string;
  "50d": string;
  "50n": string;
};

const WeatherIcons: ObjType = {
  "01d": "../icon/sunny.svg",
  "01n": "../icon/night.svg",
  "02d": "../icon/day.svg",
  "02n": "../icon/cloudy-night.svg",
  "03d": "../icon/cloudy.svg",
  "03n": "../icon/cloudy.svg",
  "04d": "../icon/perfect-day.svg",
  "04n": "../icon/cloudy-night.svg",
  "09d": "../icon/rain.svg",
  "09n": "../icon/rain-night.svg",
  "10d": "../icon/rain.svg",
  "10n": "../icon/rain-night.svg",
  "11d": "../icon/storm.svg",
  "11n": "../icon/storm.svg",
  "13d": "../icon/snow.svg",
  "13n": "../icon/snow.svg",
  "50d": "../icon.cloudy.svg",
  "50n": "../icon/cloudy-night.svg",
};

const marginAutoLeft = {
  margin: "auto",
  marginLeft: "10px",
};

interface IWeatherProps {
  weather: any;
  countryName: any;
  cityName: any;
}

function WeatherDiv(props: IWeatherProps) {
  const { weather, countryName, cityName } = props;

  const unixTimeSr = weather?.current?.sunrise;
  const unixTimeSs = weather?.current?.sunset;
  const dateSr = new Date(unixTimeSr * 1000);
  const dateSs = new Date(unixTimeSs * 1000);

  const [cookies, setCookie] = useCookies(["city"]);

  const saveCookies = (name: any, value: string[]) => {
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    setCookie(name, value, {
      expires: new Date(nextYear),
    });
  };
  const hour = (time: number): string => {
    if (time < 10) {
      return `0${time}`;
    } else {
      return `${time}`;
    }
  };

  const iconname: string = weather?.current?.weather[0]?.icon ?? "";
  console.log(cityName, countryName);
  return (
    <div className="weatherCpBox">
      <div className="nameBox">
        <span className="temp1">
          <span className="temp2">{`${Math.floor(
            weather?.current?.temp - 273
          )}°C`}</span>{" "}
          | {weather?.current?.weather[0].description}
        </span>
        <Image alt="" className="weatherImg" src={WeatherIcons[iconname]} />
      </div>
      <div className="minMax">
        <span className="ininSpan">
          Max : {(weather?.daily[0]?.temp?.max - 271).toFixed(1)}°C
        </span>
        <span className="ininSpan">
          Min : {(weather?.daily[0]?.temp?.min - 273).toFixed(1)}°C
        </span>
      </div>
      <span className="nameCountry">
        {cityName}, {countryName}
        <button
          className="bookmark text-sm"
          onClick={q => {
            let oldCookie: string[];
            if (Symbol.iterator in Object(cookies?.city)) {
              oldCookie = [...cookies.city];
            } else {
              oldCookie = [cookies.city];
            }

            if (!oldCookie.includes(cityName)) {
              oldCookie.push(cityName);
              alert(`즐겨찾기에 추가가 완료되었습니다. (${cityName})`);
            } else {
              if (!confirm("즐겨찾기에서 삭제할까요?")) {
                q.preventDefault();
              } else {
                const indexA = oldCookie.indexOf(cityName);
                //이건 뭐노?
                //ㄴ 북마크 삭제하는거 ㅇㅇ;
                if (indexA > -1) {
                  // delete oldCookie[indexA];
                  oldCookie.splice(indexA, 1);
                }

                alert(`즐겨찾기에서 삭제했습니다. (${cityName})`);
              }
              oldCookie.forEach(e => {
                if (e === null) {
                  console.log(oldCookie.indexOf(e), e);
                  oldCookie.splice(oldCookie.indexOf(e), 1);
                }
              });
            }
            saveCookies("city", oldCookie);
          }}
        >
          Bookmark
        </button>
      </span>
      <span className="weatherinfo">Weather Info</span>

      <div className="divBox">
        <div className="inBoxDiv">
          <Image alt="" className="icons" src={"../icon/temp.svg"} />
          <span className="inSpan" style={marginAutoLeft}>
            <span className="ininSpan">
              {" "}
              {hour(dateSr.getHours())} : {hour(dateSr.getMinutes())} | Sunrise
            </span>
            <span className="ininSpan">
              {" "}
              {hour(dateSs.getHours())} : {hour(dateSs.getMinutes())} | Sunset
            </span>
          </span>
        </div>

        <div className="inBoxDiv">
          <Image alt="" className="icons" src={"../icon/humidity.svg"} />
          <span className="inSpan">
            {weather?.current?.humidity}
            <span className="ininSpan">Humidity</span>
          </span>
        </div>
        <div className="inBoxDiv">
          <Image alt="" className="icons" src={"../icon/wind.svg"} />
          <span className="inSpan">
            {weather?.current?.wind_speed}
            <span className="ininSpan">Wind Speed</span>
          </span>
        </div>
        <div className="inBoxDiv">
          <Image alt="" className="icons" src={"../icon/pressure.svg"} />
          <span className="inSpan">
            {weather?.current?.pressure}
            <span className="ininSpan">Pressure</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherDiv;

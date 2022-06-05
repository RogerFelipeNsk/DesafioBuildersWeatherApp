import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import dayjs from 'dayjs';

import { updateLocation, CoordsType, getWeatherData, sampleOnecall, requestLocationRNCommunityGeolocation, requestLocationRNGetLocation, requestLocationRNGeolocationService } from './actions';
import styles from './styles';
import Loading from '../Loading';
import SvgIcons from '../../assets/icons_svg';

const dailyModel = { "dt": 1654009200, "sunrise": 1653991010, "sunset": 1654029042, "moonrise": 1653994560, "moonset": 1654032060, "moon_phase": 0.04, "temp": { "day": 287.07, "min": 285.8, "max": 288.37, "night": 285.8, "eve": 286.34, "morn": 287.5 }, "feels_like": { "day": 287.05, "night": 285.6, "eve": 286.27, "morn": 287.58 }, "pressure": 1020, "humidity": 97, "dew_point": 285.86, "wind_speed": 1.04, "wind_deg": 111, "wind_gust": 2.91, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "clouds": 100, "pop": 0.97, "rain": 4.73, "uvi": 0.83 };
const hourlyModel = { "dt": 1654041600, "temp": 285.89, "feels_like": 285.7, "pressure": 1021, "humidity": 95, "dew_point": 285.11, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.95, "wind_deg": 116, "wind_gust": 2.53, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10n" }], "pop": 0.97, "rain": { "1h": 0.41 } };
const current = {
  "lat": -26.9121, "lon": -48.9783, "timezone": "America/Sao_Paulo", "timezone_offset": -10800,
  "current": {
    "dt": 1654044702, "sunrise": 1653991010, "sunset": 1654029042, "temp": 285.96, "feels_like": 285.75, "pressure": 1021, "humidity": 94, "dew_point": 285.02, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.47, "wind_deg": 176, "wind_gust": 1.37,
    "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n" }]
  }
};

export default function Main() {
  const [coords, setCoords] = useState<CoordsType>({ latitude: 0, longitude: 0 });
  const [loading, setLoading] = useState<boolean>(true);

  const [locationTest, setLocationTest] = useState<any>();

  useEffect(() => {
    (async () => {
      //updateLocation(setCoords, setLoading);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (coords.latitude !== 0 && coords.longitude !== 0) {
        //const wd = await getWeatherData(coords);
        //console.log(JSON.stringify(wd));

        const sample = {
          "lat": -26.9121, "lon": -48.9783, "timezone": "America/Sao_Paulo", "timezone_offset": -10800,
          "current": {
            "dt": 1654044702, "sunrise": 1653991010, "sunset": 1654029042, "temp": 285.96, "feels_like": 285.75, "pressure": 1021, "humidity": 94, "dew_point": 285.02, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.47, "wind_deg": 176, "wind_gust": 1.37,
            "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n" }]
          },
          "hourly": [
            { "dt": 1654041600, "temp": 285.89, "feels_like": 285.7, "pressure": 1021, "humidity": 95, "dew_point": 285.11, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.95, "wind_deg": 116, "wind_gust": 2.53, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10n" }], "pop": 0.97, "rain": { "1h": 0.41 } },
            { "dt": 1654045200, "temp": 285.96, "feels_like": 285.75, "pressure": 1021, "humidity": 94, "dew_point": 285.02, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.47, "wind_deg": 176, "wind_gust": 1.37, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n" }], "pop": 0.78 },
            { "dt": 1654048800, "temp": 285.8, "feels_like": 285.6, "pressure": 1021, "humidity": 95, "dew_point": 285.02, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.5, "wind_deg": 187, "wind_gust": 1.58, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n" }], "pop": 0.79 },
            { "dt": 1654052400, "temp": 285.59, "feels_like": 285.4, "pressure": 1021, "humidity": 96, "dew_point": 284.97, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.6, "wind_deg": 148, "wind_gust": 1.35, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n" }], "pop": 0.72 }, { "dt": 1654056000, "temp": 285.41, "feels_like": 285.22, "pressure": 1020, "humidity": 97, "dew_point": 284.95, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.78, "wind_deg": 173, "wind_gust": 1.8, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10n" }], "pop": 0.96, "rain": { "1h": 0.15 } }, { "dt": 1654059600, "temp": 285.23, "feels_like": 285.05, "pressure": 1020, "humidity": 98, "dew_point": 284.92, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.52, "wind_deg": 192, "wind_gust": 1.14, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10n" }], "pop": 1, "rain": { "1h": 0.38 } }, { "dt": 1654063200, "temp": 285.08, "feels_like": 284.91, "pressure": 1019, "humidity": 99, "dew_point": 284.18, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.48, "wind_deg": 170, "wind_gust": 1.26, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n" }], "pop": 0.8 }, { "dt": 1654066800, "temp": 285.04, "feels_like": 284.87, "pressure": 1019, "humidity": 99, "dew_point": 284.18, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.43, "wind_deg": 199, "wind_gust": 0.85, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n" }], "pop": 0.71 }, { "dt": 1654070400, "temp": 285.08, "feels_like": 284.91, "pressure": 1019, "humidity": 99, "dew_point": 284.22, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.49, "wind_deg": 173, "wind_gust": 1.08, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10n" }], "pop": 0.96, "rain": { "1h": 0.29 } }, { "dt": 1654074000, "temp": 285.17, "feels_like": 285.01, "pressure": 1019, "humidity": 99, "dew_point": 284.27, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.26, "wind_deg": 178, "wind_gust": 0.67, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10n" }], "pop": 1, "rain": { "1h": 0.35 } }, { "dt": 1654077600, "temp": 285.23, "feels_like": 285.08, "pressure": 1019, "humidity": 99, "dew_point": 284.34, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.22, "wind_deg": 229, "wind_gust": 0.52, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 0.33 } }, { "dt": 1654081200, "temp": 285.34, "feels_like": 285.2, "pressure": 1020, "humidity": 99, "dew_point": 284.43, "uvi": 0.03, "clouds": 100, "visibility": 10000, "wind_speed": 0.45, "wind_deg": 199, "wind_gust": 0.94, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 0.22 } }, { "dt": 1654084800, "temp": 285.64, "feels_like": 285.53, "pressure": 1020, "humidity": 99, "dew_point": 284.67, "uvi": 0.13, "clouds": 100, "visibility": 10000, "wind_speed": 0.87, "wind_deg": 225, "wind_gust": 2.5, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 0.41 } }, { "dt": 1654088400, "temp": 285.97, "feels_like": 285.89, "pressure": 1020, "humidity": 99, "dew_point": 285.05, "uvi": 0.3, "clouds": 100, "visibility": 7424, "wind_speed": 0.83, "wind_deg": 214, "wind_gust": 2.19, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 1.76 } }, { "dt": 1654092000, "temp": 286.19, "feels_like": 286.13, "pressure": 1020, "humidity": 99, "dew_point": 285.28, "uvi": 0.46, "clouds": 100, "visibility": 10000, "wind_speed": 0.18, "wind_deg": 171, "wind_gust": 1.03, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 1.36 } }, { "dt": 1654095600, "temp": 286.5, "feels_like": 286.48, "pressure": 1019, "humidity": 99, "dew_point": 285.49, "uvi": 0.55, "clouds": 100, "visibility": 10000, "wind_speed": 0.71, "wind_deg": 257, "wind_gust": 1.43, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 0.34 } }, { "dt": 1654099200, "temp": 286.57, "feels_like": 286.55, "pressure": 1018, "humidity": 99, "dew_point": 285.64, "uvi": 1.03, "clouds": 100, "visibility": 10000, "wind_speed": 0.22, "wind_deg": 317, "wind_gust": 0.66, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 0.78 } }, { "dt": 1654102800, "temp": 286.89, "feels_like": 286.9, "pressure": 1017, "humidity": 99, "dew_point": 285.97, "uvi": 0.78, "clouds": 100, "visibility": 10000, "wind_speed": 0.93, "wind_deg": 269, "wind_gust": 1.77, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 0.48 } }, { "dt": 1654106400, "temp": 286.78, "feels_like": 286.81, "pressure": 1016, "humidity": 100, "dew_point": 285.88, "uvi": 0.44, "clouds": 100, "visibility": 10000, "wind_speed": 0.38, "wind_deg": 152, "wind_gust": 0.82, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 1.71 } }, { "dt": 1654110000, "temp": 287.04, "feels_like": 287.07, "pressure": 1016, "humidity": 99, "dew_point": 286.12, "uvi": 0.14, "clouds": 100, "visibility": 10000, "wind_speed": 0.79, "wind_deg": 219, "wind_gust": 1.69, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 0.39 } }, { "dt": 1654113600, "temp": 286.92, "feels_like": 286.96, "pressure": 1016, "humidity": 100, "dew_point": 286.11, "uvi": 0.02, "clouds": 100, "visibility": 2755, "wind_speed": 0.57, "wind_deg": 214, "wind_gust": 1.41, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 1.69 } }, { "dt": 1654117200, "temp": 286.9, "feels_like": 286.94, "pressure": 1016, "humidity": 100, "dew_point": 286.12, "uvi": 0, "clouds": 100, "visibility": 4990, "wind_speed": 0.77, "wind_deg": 132, "wind_gust": 1.4, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10n" }], "pop": 1, "rain": { "1h": 3.53 } }, { "dt": 1654120800, "temp": 286.96, "feels_like": 287.01, "pressure": 1017, "humidity": 100, "dew_point": 286.03, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.57, "wind_deg": 218, "wind_gust": 0.91, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10n" }], "pop": 1, "rain": { "1h": 0.47 } }, { "dt": 1654124400, "temp": 287.02, "feels_like": 287.07, "pressure": 1017, "humidity": 100, "dew_point": 286.18, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.47, "wind_deg": 153, "wind_gust": 0.55, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10n" }], "pop": 1, "rain": { "1h": 0.18 } }, { "dt": 1654128000, "temp": 287.08, "feels_like": 287.14, "pressure": 1017, "humidity": 100, "dew_point": 286.32, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.5, "wind_deg": 63, "wind_gust": 1.07, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10n" }], "pop": 1, "rain": { "1h": 3.26 } }, { "dt": 1654131600, "temp": 287.04, "feels_like": 287.1, "pressure": 1017, "humidity": 100, "dew_point": 286.24, "uvi": 0, "clouds": 100, "visibility": 6501, "wind_speed": 1.23, "wind_deg": 163, "wind_gust": 2.37, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10n" }], "pop": 1, "rain": { "1h": 0.89 } }, { "dt": 1654135200, "temp": 287.06, "feels_like": 287.12, "pressure": 1016, "humidity": 100, "dew_point": 286.29, "uvi": 0, "clouds": 100, "visibility": 1710, "wind_speed": 0.22, "wind_deg": 130, "wind_gust": 0.98, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10n" }], "pop": 1, "rain": { "1h": 1.2 } }, { "dt": 1654138800, "temp": 287.09, "feels_like": 287.15, "pressure": 1016, "humidity": 100, "dew_point": 286.26, "uvi": 0, "clouds": 100, "visibility": 920, "wind_speed": 0.4, "wind_deg": 204, "wind_gust": 0.71, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10n" }], "pop": 1, "rain": { "1h": 2.22 } }, { "dt": 1654142400, "temp": 287.25, "feels_like": 287.33, "pressure": 1016, "humidity": 100, "dew_point": 286.43, "uvi": 0, "clouds": 100, "visibility": 818, "wind_speed": 0.5, "wind_deg": 309, "wind_gust": 1.05, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10n" }], "pop": 1, "rain": { "1h": 3.13 } }, { "dt": 1654146000, "temp": 287.3, "feels_like": 287.38, "pressure": 1016, "humidity": 100, "dew_point": 286.51, "uvi": 0, "clouds": 100, "visibility": 631, "wind_speed": 0.29, "wind_deg": 85, "wind_gust": 0.77, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10n" }], "pop": 1, "rain": { "1h": 3.5 } }, { "dt": 1654149600, "temp": 287.36, "feels_like": 287.45, "pressure": 1016, "humidity": 100, "dew_point": 286.48, "uvi": 0, "clouds": 100, "visibility": 536, "wind_speed": 0.33, "wind_deg": 239, "wind_gust": 0.65, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10n" }], "pop": 1, "rain": { "1h": 2.92 } }, { "dt": 1654153200, "temp": 287.47, "feels_like": 287.57, "pressure": 1016, "humidity": 100, "dew_point": 286.66, "uvi": 0, "clouds": 100, "visibility": 579, "wind_speed": 0.33, "wind_deg": 294, "wind_gust": 0.61, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10n" }], "pop": 1, "rain": { "1h": 2.8 } }, { "dt": 1654156800, "temp": 287.55, "feels_like": 287.66, "pressure": 1016, "humidity": 100, "dew_point": 286.72, "uvi": 0, "clouds": 100, "visibility": 565, "wind_speed": 0.6, "wind_deg": 305, "wind_gust": 1.57, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10n" }], "pop": 1, "rain": { "1h": 2.66 } }, { "dt": 1654160400, "temp": 287.47, "feels_like": 287.57, "pressure": 1015, "humidity": 100, "dew_point": 286.63, "uvi": 0, "clouds": 100, "visibility": 634, "wind_speed": 0.84, "wind_deg": 108, "wind_gust": 1.4, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10n" }], "pop": 1, "rain": { "1h": 2.14 } }, { "dt": 1654164000, "temp": 287.56, "feels_like": 287.67, "pressure": 1017, "humidity": 100, "dew_point": 286.71, "uvi": 0, "clouds": 100, "visibility": 772, "wind_speed": 0.33, "wind_deg": 350, "wind_gust": 0.59, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 1.39 } }, { "dt": 1654167600, "temp": 287.73, "feels_like": 287.85, "pressure": 1018, "humidity": 100, "dew_point": 286.9, "uvi": 0.03, "clouds": 100, "visibility": 847, "wind_speed": 0.22, "wind_deg": 240, "wind_gust": 0.78, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 1.13 } }, { "dt": 1654171200, "temp": 287.91, "feels_like": 288.05, "pressure": 1017, "humidity": 100, "dew_point": 287.11, "uvi": 0.11, "clouds": 100, "visibility": 1126, "wind_speed": 0.66, "wind_deg": 131, "wind_gust": 1.54, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 1.75 } }, { "dt": 1654174800, "temp": 288.22, "feels_like": 288.39, "pressure": 1019, "humidity": 100, "dew_point": 287.36, "uvi": 0.34, "clouds": 100, "visibility": 2051, "wind_speed": 0.64, "wind_deg": 329, "wind_gust": 1.15, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 0.99 } }, { "dt": 1654178400, "temp": 288.28, "feels_like": 288.46, "pressure": 1018, "humidity": 100, "dew_point": 287.42, "uvi": 0.51, "clouds": 100, "visibility": 8138, "wind_speed": 0.57, "wind_deg": 56, "wind_gust": 1.42, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 1.4 } }, { "dt": 1654182000, "temp": 288.54, "feels_like": 288.72, "pressure": 1018, "humidity": 99, "dew_point": 287.6, "uvi": 0.61, "clouds": 100, "visibility": 10000, "wind_speed": 0.7, "wind_deg": 134, "wind_gust": 1.58, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 0.78 } }, { "dt": 1654185600, "temp": 288.81, "feels_like": 289.02, "pressure": 1017, "humidity": 99, "dew_point": 287.86, "uvi": 0.71, "clouds": 100, "visibility": 6553, "wind_speed": 0.61, "wind_deg": 93, "wind_gust": 1.17, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 0.55 } }, { "dt": 1654189200, "temp": 288.73, "feels_like": 288.93, "pressure": 1017, "humidity": 99, "dew_point": 287.84, "uvi": 0.54, "clouds": 100, "visibility": 7608, "wind_speed": 0.46, "wind_deg": 96, "wind_gust": 0.84, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 1.32 } }, { "dt": 1654192800, "temp": 288.67, "feels_like": 288.86, "pressure": 1016, "humidity": 99, "dew_point": 287.78, "uvi": 0.31, "clouds": 100, "visibility": 10000, "wind_speed": 0.64, "wind_deg": 46, "wind_gust": 1.85, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "pop": 1, "rain": { "1h": 1.28 } }, { "dt": 1654196400, "temp": 288.39, "feels_like": 288.58, "pressure": 1016, "humidity": 100, "dew_point": 287.53, "uvi": 0.06, "clouds": 100, "visibility": 10000, "wind_speed": 0.89, "wind_deg": 82, "wind_gust": 2.31, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "pop": 0.89, "rain": { "1h": 1 } }, { "dt": 1654200000, "temp": 288.33, "feels_like": 288.51, "pressure": 1017, "humidity": 100, "dew_point": 287.44, "uvi": 0.01, "clouds": 100, "visibility": 10000, "wind_speed": 0.76, "wind_deg": 89, "wind_gust": 1.63, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }], "pop": 0.82 }, { "dt": 1654203600, "temp": 288.18, "feels_like": 288.35, "pressure": 1017, "humidity": 100, "dew_point": 287.26, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.75, "wind_deg": 101, "wind_gust": 1.45, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n" }], "pop": 0.76 }, { "dt": 1654207200, "temp": 288.1, "feels_like": 288.26, "pressure": 1018, "humidity": 100, "dew_point": 287.25, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.28, "wind_deg": 81, "wind_gust": 0.37, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n" }], "pop": 0.76 }, { "dt": 1654210800, "temp": 288.09, "feels_like": 288.25, "pressure": 1019, "humidity": 100, "dew_point": 287.22, "uvi": 0, "clouds": 100, "visibility": 10000, "wind_speed": 0.36, "wind_deg": 142, "wind_gust": 0.45, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n" }], "pop": 0.64 }],

          "daily": [
            { "dt": 1654009200, "sunrise": 1653991010, "sunset": 1654029042, "moonrise": 1653994560, "moonset": 1654032060, "moon_phase": 0.04, "temp": { "day": 287.07, "min": 285.8, "max": 288.37, "night": 285.8, "eve": 286.34, "morn": 287.5 }, "feels_like": { "day": 287.05, "night": 285.6, "eve": 286.27, "morn": 287.58 }, "pressure": 1020, "humidity": 97, "dew_point": 285.86, "wind_speed": 1.04, "wind_deg": 111, "wind_gust": 2.91, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "clouds": 100, "pop": 0.97, "rain": 4.73, "uvi": 0.83 },
            { "dt": 1654095600, "sunrise": 1654077439, "sunset": 1654115431, "moonrise": 1654084140, "moonset": 1654121400, "moon_phase": 0.07, "temp": { "day": 286.5, "min": 285.04, "max": 287.08, "night": 287.06, "eve": 286.9, "morn": 285.17 }, "feels_like": { "day": 286.48, "night": 287.12, "eve": 286.94, "morn": 285.01 }, "pressure": 1019, "humidity": 99, "dew_point": 285.49, "wind_speed": 1.23, "wind_deg": 163, "wind_gust": 2.5, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "clouds": 100, "pop": 1, "rain": 20.17, "uvi": 1.03 }, { "dt": 1654182000, "sunrise": 1654163867, "sunset": 1654201821, "moonrise": 1654173600, "moonset": 1654210920, "moon_phase": 0.1, "temp": { "day": 288.54, "min": 287.09, "max": 288.81, "night": 287.8, "eve": 288.18, "morn": 287.47 }, "feels_like": { "day": 288.72, "night": 287.93, "eve": 288.35, "morn": 287.57 }, "pressure": 1018, "humidity": 99, "dew_point": 287.6, "wind_speed": 0.89, "wind_deg": 82, "wind_gust": 2.31, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "clouds": 100, "pop": 1, "rain": 30.96, "uvi": 0.71 }, { "dt": 1654268400, "sunrise": 1654250294, "sunset": 1654288213, "moonrise": 1654262760, "moonset": 1654300620, "moon_phase": 0.13, "temp": { "day": 288.25, "min": 286.57, "max": 288.25, "night": 286.71, "eve": 286.89, "morn": 286.57 }, "feels_like": { "day": 288.27, "night": 286.65, "eve": 286.85, "morn": 286.55 }, "pressure": 1023, "humidity": 94, "dew_point": 286.48, "wind_speed": 0.6, "wind_deg": 139, "wind_gust": 1.27, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "clouds": 100, "pop": 0.34, "rain": 0.24, "uvi": 0.65 }, { "dt": 1654354800, "sunrise": 1654336721, "sunset": 1654374606, "moonrise": 1654351680, "moonset": 1654390380, "moon_phase": 0.16, "temp": { "day": 290.39, "min": 286.49, "max": 291.13, "night": 289.08, "eve": 289.22, "morn": 286.75 }, "feels_like": { "day": 290.42, "night": 289.31, "eve": 289.42, "morn": 286.7 }, "pressure": 1023, "humidity": 86, "dew_point": 287.15, "wind_speed": 0.75, "wind_deg": 251, "wind_gust": 1.25, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "clouds": 100, "pop": 0.58, "rain": 0.72, "uvi": 1.95 }, { "dt": 1654441200, "sunrise": 1654423148, "sunset": 1654461000, "moonrise": 1654440360, "moonset": 1654480080, "moon_phase": 0.19, "temp": { "day": 290.67, "min": 289.1, "max": 290.91, "night": 290.91, "eve": 290.65, "morn": 289.37 }, "feels_like": { "day": 291.09, "night": 291.35, "eve": 291.07, "morn": 289.66 }, "pressure": 1019, "humidity": 100, "dew_point": 289.78, "wind_speed": 0.51, "wind_deg": 311, "wind_gust": 3.5, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "clouds": 100, "pop": 1, "rain": 16.72, "uvi": 0.12 }, { "dt": 1654527600, "sunrise": 1654509573, "sunset": 1654547395, "moonrise": 1654528800, "moonset": 1654569840, "moon_phase": 0.22, "temp": { "day": 292.75, "min": 291.44, "max": 294.05, "night": 292.6, "eve": 292.79, "morn": 291.57 }, "feels_like": { "day": 293.38, "night": 293.21, "eve": 293.42, "morn": 292.08 }, "pressure": 1011, "humidity": 100, "dew_point": 291.89, "wind_speed": 1.46, "wind_deg": 328, "wind_gust": 8.49, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "clouds": 100, "pop": 1, "rain": 6.98, "uvi": 1 }, { "dt": 1654614000, "sunrise": 1654595998, "sunset": 1654633791, "moonrise": 1654617180, "moonset": 0, "moon_phase": 0.25, "temp": { "day": 295.02, "min": 286.24, "max": 295.02, "night": 286.24, "eve": 289.41, "morn": 291.59 }, "feels_like": { "day": 294.78, "night": 285.72, "eve": 288.87, "morn": 291.29 }, "pressure": 1010, "humidity": 58, "dew_point": 285.81, "wind_speed": 4.15, "wind_deg": 264, "wind_gust": 12.72, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "clouds": 24, "pop": 0.85, "rain": 0.54, "uvi": 1 }]
        }
      }
      setLoading(false);
    })();
  }, [coords]);

  if (loading) {
    return <Loading />
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <SvgIcons iconType='sun' size={50} />
        {/* <Text>Coordinates</Text>
        <Text>{`Latitude: ${coords.latitude}`}</Text>
        <Text>{`Longitude: ${coords.longitude}`}</Text>
        <Button title="Update" onPress={() => updateLocation(setCoords, setLoading)} />
        <Button title="Weather Data" onPress={() => {
          //["lat", "lon", "timezone", "timezone_offset", "current", "hourly", "daily"]
          console.log(Object.keys(sampleOnecall));
          const { lat, lon, timezone, timezone_offset, current, hourly, daily } = sampleOnecall;
          hourly.forEach(item => {
            const { dt } = item;
            const date = dayjs(dt * 1000).format();
            console.log(date)
          });
        }} /> */}
        {locationTest && <Text>{`${JSON.stringify(locationTest)}`}</Text>}
        <Button title="Set Location" onPress={() => {
          /**
           * RN Get Location
           */
          ///requestLocationRNGetLocation(setLocationTest, setLoading);
          /**
           * RN Community Geolocation
           */
          //requestLocationRNCommunityGeolocation(setLocationTest, setLoading);
          /*
           * RN Geolocation Service
           * um pouco lento, as vezes demora pra trazer a localização. 
           */
          requestLocationRNGeolocationService(setLocationTest, setLoading);
        }} />
        <Button title="Clean Location" onPress={() => setLocationTest(null)} />
      </View>
    </SafeAreaView>
  )
};
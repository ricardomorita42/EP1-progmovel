import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, Alert } from 'react-native';
import { Text, View } from '../components/Themed';

import {weatherService} from '../modules/weather/services'
import {WeatherData} from '../modules/weather/services/interfaces'
import {WeatherItem} from '../components/weather_item'

import OpenWeatherMap from 'openweathermap-ts';

//Baseado em
//https://thinhtran3588.medium.com/make-professional-mobile-apps-with-react-native-and-typescript-fetch-apis-24f4bf5fb768

interface Conditions {
  lat: number;
  long: number;
  city: string;
  unit: string;
  lang: string;
}

const config = {
  weather: {
    apiKey: "f4862a0bd37c9685edb345d97c1f63d1",
    unitCodes:{
      celsius: 'metric',
      fahrenheit:'imperial',
    },
  },
  dateFormat: 'DD/MM/YYYY',
};

interface props {
  latitude: number;
  longitude: number;
}

export default function Weather({latitude,longitude}:props) {
  const [conditions, setConditions] = useState<Conditions>({
    long: latitude,
    lat: longitude,
    city: 'Sao Paulo',
    unit: config.weather.unitCodes.celsius,
    lang: 'vi',
  });

  const [weatherForecasts, setWeatherForecasts] = useState<WeatherData[]>([]);

  useEffect(() => {
    const refresh = async (): Promise<void> => {
      try {
        const data = await weatherService.getDailyWeatherForecast(conditions);
        setWeatherForecasts(data);
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    };
    refresh();
  }, [conditions]);

  const toggleUnit = (): void => {
    setConditions({
      ...conditions,
      unit:
        conditions.unit === config.weather.unitCodes.celsius
          ? config.weather.unitCodes.fahrenheit
          : config.weather.unitCodes.celsius,
    });
  };

  if (weatherForecasts.length === 0) {
    return (
      <View>
        <Text>No data</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {weatherForecasts.map((weatherForecast, index) => (
        <WeatherItem key={weatherForecast.date} data={weatherForecast} isToday={index === 0} unit={conditions.unit} />
      ))}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7b733',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

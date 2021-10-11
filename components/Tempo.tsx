import React, {useState} from 'react';
import { Button, StyleSheet, Image, TextInput} from 'react-native';
import { weatherService } from '../modules/weather/services';
import { WeatherData } from '../modules/weather/services/interfaces';
import { Text, View } from './Themed';

const api_key = "f4862a0bd37c9685edb345d97c1f63d1";

interface weather_data {
  key?: number
  name?: string;
  weather?: string;
  temperature?: number;
  humidity?: number;
  temp_min?: number;
  temp_max?: number;
}

let weatherData:Array<weather_data> = [];  

export default function Tempo() {
  const [cityName, setCityName] = useState('Sao Paulo');
  const [isLoading,setIsLoading] = useState(false);
  const [isFetched,setIsFetched] = useState(false);

  let request = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pt_br&appid=${api_key}`

  const getInfo = async () => {
    try {
      setIsLoading(true);
      const resultado =  await fetch(request);
      const json = await resultado.json();
      console.log(json);
      console.log(json.name);
      console.log(json.weather[0].main);
      console.log(json.main.temp);
      console.log(json.main.humidity);
      
      let input: weather_data = {};

      input = {
        key: weatherData.length+1,
        name: JSON.parse(JSON.stringify(json)).name,
        weather:JSON.parse(JSON.stringify(json)).weather[0].main,
        temperature: JSON.parse(JSON.stringify(json)).main.temp,
        humidity: JSON.parse(JSON.stringify(json)).main.humidity,
        temp_min: JSON.parse(JSON.stringify(json)).main.temp_min,
        temp_max: JSON.parse(JSON.stringify(json)).main.temp_max
      }

      weatherData.push(input);
      
      console.log(weatherData)
      console.log(weatherData.length)
      console.log(weatherData[0].name)
      setIsLoading(false);
      setIsFetched(true);
    } catch (e) {
      console.error(e);
    }
  }

  const list = () => {
    return weatherData.map((element) => {
      return (
        <View key={element.key} style={styles.result}>
          <Text>Nome: {element.name}</Text>
          <Text>Clima: {element.weather}</Text>
          <Text>Temperatura: {element.temperature} &#176;C </Text>
          <Text>Umidade do ar: {element.humidity} %</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text>Escolha uma Cidade:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCityName}
        value={cityName}
        placeholder="São Paulo"
      />
      <Button
        disabled={isLoading}
        title="ok"
        onPress={() => {
          getInfo();
        }}
      />
      {
        isFetched == true && weatherData.length > 0? 
        <View>{list()}</View>
        : 
        <></>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#FAEBD7',
    borderRadius:5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  result: {
    margin: 10,
    backgroundColor:'#FAEBD7',
    borderRadius:5,
    borderColor:'#DEB887',
  }
});
import React from 'react';

import { Text, View } from './Themed';


import {config} from '../config';
import {formatDate} from '../helpers'
import {WeatherData} from '../modules/weather/services/interfaces';

interface Props {
  data: WeatherData;
  isToday?: boolean;
  unit: string;
}

export const WeatherItem = (props: Props): JSX.Element => {
  const {data, isToday, unit} = props;
  const displayUnit = unit === config.weather.unitCodes.celsius ? 'C' : 'F';

  return (
    <View>
      <Text>{`Date : ${formatDate(data.date)} ${isToday ? '(Today)' : ''}`}</Text>
      {isToday && <Text>{`Current temp. : ${data.temperature.current}°${displayUnit}`}</Text>}
      <Text>{`Min temp. : ${data.temperature.min}°${displayUnit}`}</Text>
      <Text>{`Max temp. : ${data.temperature.max}°${displayUnit}`}</Text>
      <Text>{`Humidity. : ${data.humidity}%`}</Text>
    </View>
  );
};
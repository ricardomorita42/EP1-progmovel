import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, Alert,TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
import { Text, View } from '../components/Themed';

import Weather from '../components/Weather'

export default function TabTwoScreen() {
  const [lat, setLat] = useState(23.56);
  const [long, setLong] = useState(46.64);
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <View style={styles.container}>
      {
        isLoading==true?
        <>
          <CheckBox
            title="São Paulo"
            onPress={() => {
              setLat(23.56);
              setLong(46.64);
              setIsLoading(false);
            } } /><CheckBox
              title="Rio de Janeiro"
              onPress={() => {
                setLat(22.91);
                setLong(43.17);
                setIsLoading(false);
              } } /><CheckBox
              title="Londres"
              onPress={() => {
                setLat(51.51);
                setLong(0.13);
                setIsLoading(false);
              } } />

            <CheckBox
              title="Tóquio"
              onPress={() => {
                setLat(35.67);
                setLong(139.65);
                setIsLoading(false);
              } } />
        </>
        :
        <Weather latitude={lat} longitude={long}/>
      }
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

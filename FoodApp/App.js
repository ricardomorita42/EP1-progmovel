import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import useState from 'react-usestateref'

import RestauranteMenu from './components/RestauranteMenu';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FoodApp</Text>
      <Text> Escolha sua refeição abaixo!</Text>
      <RestauranteMenu />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"grey",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
  },
  cardapioText:{
    fontsize:12,
    alignItems: "flex-start",
    justifyContent:'center',
  },
  cardapioTitle:{
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: "flex-start",
    justifyContent:'baseline',
  },
});
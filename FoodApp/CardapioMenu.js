import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

export default function CardapioMenu(props) {
  let escolhaMenu = ''
  if (id === 1) {
    escolhaMenu = 'Cardapio McDonalds'
  } else if (id === 2) {
    escolhaMenu = 'Cardapio Pizzaria do Bairro';
  } else {
    /* Deixando aqui uma opção default*/
    escolhaMenu = 'Cardapio McDonalds'
  }

  return ( 
    <View style={styles.menuContainer}>
      <Text> Aqui ficaria o cardápio do restaurante {escolhaMenu}.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
      backgroundColor: 'white',
      borderColor: '#D6D7DA',
      borderWidth: 2,
      borderRadius: 10,
      padding: 15,
      margin: 15,
      marginBottom: 0,
  },
  textContainer: {
      borderColor: '#D6D6DA',
      borderRadius: 2,
      borderWidth: 1,
      marginBottom: 5,
  },
  text: {
      height: 30,
      padding: 5,
      fontSize: 12,
  },
});
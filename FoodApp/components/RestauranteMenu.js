import React, {useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';

import ToggleableMenu from './ToggleableMenu';

const RestauranteMenu = (props) => {
  const [valorTotal1,setValorTotal1]= useState(0);
  const [valorTotal2,setValorTotal2]= useState(0);

  return ( 
    <View style={styles.menuContainer}>
      <ToggleableMenu
        id={1}
        nomeRest='McDonalds'
        total={valorTotal1}
        handler={setValorTotal1}
      />
      <ToggleableMenu
        id={2}
        nomeRest='Spoletto'
        total={valorTotal2}
        handler={setValorTotal2}
      />
      <Text>Total: R$ {valorTotal1 + valorTotal2}</Text>
    </View>
  );
}

export default RestauranteMenu;

const styles = StyleSheet.create({
  menuContainer: {
      backgroundColor: 'white',
      borderColor: '#D6D7DA',
      borderWidth: 2,
      borderRadius: 10,
      padding: 15,
      marginBottom: 0,
  },
  altMenuContainer: {
    backgroundColor: 'gray',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
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
  button: {
    marginTop: 10,
    minWidth: 100,
    borderWidth: 2,
    borderRadius: 3,
  },
});
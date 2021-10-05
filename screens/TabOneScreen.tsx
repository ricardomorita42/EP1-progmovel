import React, {useState} from 'react';
import { StyleSheet,ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import ToggleableMenu from '../components/ToggleableMenu';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [valorTotal1,setValorTotal1]= useState(0);
  const [valorTotal2,setValorTotal2]= useState(0);

  return (
    <ScrollView style={styles.menuContainer}>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
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
      
      <Text style={styles.valorText}>Total: R$ {valorTotal1 + valorTotal2}</Text>

    </ ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    marginBottom: 0,
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
  valorText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign:"right",
  },
});

import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import RestauranteMenu from './components/RestauranteMenu';

import ItemCardapio from './components/ItemCardapio';

import Imagens from './components/Imagens'

export default function App() {
  const [feijoada,setFeijoada] = useState(0);
  const [total,setTotal] = useState(0);

  const [amountCardapio, setItemCardapio] = useState(0);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FoodApp</Text>
      <Text> Escolha sua refeição abaixo!</Text>
      <RestauranteMenu />
  
      <Text style={{fontSize:14}}> Total: R$ {(total).toFixed(2)} </Text>
    
      <ItemCardapio
        titulo="Macarrão"
        imagem="macarrao"
        descricao="macarronada de domingo"
        preco="10"
        amount={amountCardapio}
        handler={setItemCardapio} 
      />
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
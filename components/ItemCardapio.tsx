import React, {useEffect, useState, Dispatch, SetStateAction} from 'react';
import { Button, Image, StyleSheet,TextInput } from 'react-native';

import { Text, View } from './Themed';

import {Imagens} from "./Imagens"


interface props {
  titulo: string;
  imagem:string;
  descricao:string;
  preco: number;
  total: number;
  handler: Dispatch<SetStateAction<number>>;
}

export default function ItemCardapio({descricao,titulo,imagem,total,handler, preco}:props) {
  const sanitizedHandler = (numero:number) => {
    numero < 0 ? handler(0) : handler(total-preco);
    };

  type AppProps = {
    imagem: string;
  };
  const imageName = Imagens({imagem});
  const [amount,setAmount] = useState(0);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imageName} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.cardapioTitle}>{titulo}</Text>
          <Text style={styles.cardapioText}>{descricao}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <Text>R$ {amount * preco}</Text>
          
          <View style={{flexDirection:'row'}}>
            <button onClick={() => {
              sanitizedHandler(total-preco);
              setAmount(amount<=0? 0 : amount-1);
            }}> - </button>
            {/* // Typescript sux
            <TextInput 
              style={styles.textInput}
              onChangeText={handler(amount*preco)}
              value={amount}
              placeholder={total}
              keyboardType={'numeric'}
            />
            */}
            <button onClick={() => {
              handler(total+preco);
              setAmount(amount+1);
            }}> + </button>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flexDirection:"row",
    padding:5,
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
  imageContainer: {
    flex:1,
    justifyContent:'center',
    padding:5,
    marginHorizontal:5,
  },
  image:{
    width:100,
    height:100,
  },
  descriptionContainer:{
    flex:3,
    padding:15,
    marginHorizontal:20,

  },
  cardapioText:{
    fontsize:12,
    alignItems: "flex-start",
    justifyContent:'flex-start',
  },
  cardapioTitle:{
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: "flex-start",
    justifyContent:'flex-start',
  },
  quantityContainer:{
    flex:1,
    justifyContent:'center',
  },
  textInput: {
    padding:5,
    borderWidth:1,
    marginHorizontal:1,
    width:20,
  },
});

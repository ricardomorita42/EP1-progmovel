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
          <Text style={styles.cardapioText}>Preço: R${preco},00</Text>
        </View>
        <View style={styles.quantityContainer}>
          <Text>R$ {amount * preco},00</Text>
          
          <View style={{backgroundColor:"#FAEBD7",flexDirection:'row'}}>
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
    backgroundColor:"#FAEBD7",
    width:'100%',
    borderRadius:5,
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
    backgroundColor:"#FAEBD7",
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
    backgroundColor:"#FAEBD7",
    flex:3,
    padding:15,
    marginHorizontal:20,

  },
  cardapioText:{
    fontSize:12,
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
    backgroundColor:"#FAEBD7",
    flex:1,
    justifyContent:'center',
  },
  textInput: {
    backgroundColor:"#FAEBD7",
    padding:5,
    borderWidth:1,
    marginHorizontal:1,
    width:20,
  },
});

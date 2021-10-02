import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import Imagens from "./Imagens"

const ItemCardapio = (props) => {
  const sanitizedHandler = (number) => {
    number < 0 ? props.handler(0) : props.handler(props.amount-preco);
    };

  const imageName = Imagens(props.imagem);
  const [amount,setAmount] = useState(0);
  const preco = parseInt(props.preco,10);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style ={styles.image} source={imageName} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.cardapioTitle}>{props.titulo}</Text>
          <Text style={styles.cardapioText}>{props.descricao}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <Text>R$ {amount * preco}</Text>
          
          <View style={{flexDirection:'row'}}>
            <button onClick={() => {
              sanitizedHandler(props.amount-preco);
              setAmount(amount<=0? null : amount-1);
            }}> - </button>
            <TextInput 
              style={styles.textInput}
              onChangeText={props.handler(amount*preco)}
              value={amount}
              placeholder={props.amount}
              keyboardType={'numeric'}
            /> 
            <button onClick={() => {
              props.handler(props.amount+preco);
              setAmount(amount+1);
            }}> + </button>
          </View>
        </View>
      </View>

    </View>
  );
}

export default ItemCardapio;

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flexDirection:"row",
    padding:5,
    backgroundColor:'lightblue',
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardapioText:{
    fontsize:12,
    alignItems: "flex-start",
    justifyContent:'baseline',
  },
  cardapioTitle:{
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: "flex-start",
    justifyContent:'baseline',
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
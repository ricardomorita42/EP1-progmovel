import React, {useEffect, useState, Dispatch, SetStateAction} from 'react';
import { Button, StyleSheet } from 'react-native';

import ItemCardapio from './ItemCardapio';

import { Text, View } from './Themed';

interface props {
  total:number;
  handler: Dispatch<SetStateAction<number>>;
}

export default function Cardapio1({total,handler}:props) {
  const [preco1,setPreco1] =  useState(0);
  const [preco2,setPreco2] =  useState(0);
  const [preco3,setPreco3] =  useState(0);
  const [preco4,setPreco4] =  useState(0);

  useEffect(() => {
      handler(preco1+preco2+preco3+preco4)
    }, [preco1,preco2,preco3,preco4])

  return (
    <View style={styles.container}>
      <ItemCardapio
        titulo="Hamburguer"
        imagem="hamburguer_batata"
        descricao="Promoção de Hambúrguer + Batata Frita"
        preco={20}
        total={preco1}
        handler={setPreco1}
      />
      <ItemCardapio
        titulo="Coca-cola"
        imagem="cocacola"
        descricao="Refrigerante de Cola 300ml"
        preco={4}
        total={preco2}
        handler={setPreco2}
      />
      <ItemCardapio
        titulo="Sorvete de Baunilha"
        imagem="sorvete"
        descricao="Sorvete de Baunilha na Casquinha"
        preco={3}
        total={preco3}
        handler={setPreco3}
      />
      <ItemCardapio
        titulo="Maçã"
        imagem="maca"
        descricao="Maçã pré-lavada e pronta para consumo"
        preco={2}
        total={preco4}
        handler={setPreco4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#FAEBD7",
    flex: 1,
    borderRadius:5,
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

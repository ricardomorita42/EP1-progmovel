import React, {useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';

import ItemCardapio from './ItemCardapio';

const Cardapio1 = (props)=> {
  return (
    <View>
      <ItemCardapio
        titulo="Hamburguer"
        imagem="hamburguer_batata"
        descricao="Promoção de Hambúrguer + Batata Frita"
        preco={20}
        amount={props.total}
        handler={props.handler}
      />
      <ItemCardapio
        titulo="Coca-cola"
        imagem="cocacola"
        descricao="Refrigerante de Cola 300ml"
        preco={4}
        amount={props.total}
        handler={props.handler}
      />
    </View>
  );
}

export default Cardapio1
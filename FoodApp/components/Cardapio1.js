import React, {useEffect} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import useState from 'react-usestateref'

import ItemCardapio from './ItemCardapio';

const Cardapio1 = (props) => {
  const [preco1,setPreco1] =  useState(0);
  const [preco2,setPreco2] =  useState(0);
  const [preco3,setPreco3] =  useState(0);
  const [preco4,setPreco4] =  useState(0);

  useEffect(() => {
      props.handler(preco1+preco2+preco3+preco4)
    }, [preco1,preco2,preco3,preco4])

  return (
    <View>
      <ItemCardapio
        titulo="Hamburguer"
        imagem="hamburguer_batata"
        descricao="Promoção de Hambúrguer + Batata Frita"
        preco={20}
        amount={preco1}
        handler={setPreco1}
      />
      <ItemCardapio
        titulo="Coca-cola"
        imagem="cocacola"
        descricao="Refrigerante de Cola 300ml"
        preco={4}
        amount={preco2}
        handler={setPreco2}
      />
      <ItemCardapio
        titulo="Sorvete de Baunilha"
        imagem="sorvete"
        descricao="Sorvete de Baunilha na Casquinha"
        preco={4}
        amount={preco3}
        handler={setPreco3}
      />
      <ItemCardapio
        titulo="Maçã"
        imagem="maca"
        descricao="Maçã pré-lavada e pronta para consumo"
        preco={2}
        amount={preco4}
        handler={setPreco4}
      />
    </View>
  );
}

export default Cardapio1
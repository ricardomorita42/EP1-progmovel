import React, {useEffect, useState, Dispatch, SetStateAction} from 'react';
import { Button, StyleSheet } from 'react-native';

import ItemCardapio from './ItemCardapio';

import { Text, View } from './Themed';

interface props {
  total:number;
  handler: Dispatch<SetStateAction<number>>;
}

export default function Cardapio2({total,handler}:props) {
  const [preco1,setPreco1] =  useState(0);
  const [preco2,setPreco2] =  useState(0);
  const [preco3,setPreco3] =  useState(0);
  const [preco4,setPreco4] =  useState(0);
  const [preco5,setPreco5] =  useState(0);

  useEffect(() => {
      handler(preco1+preco2+preco3+preco4+preco5)
    }, [preco1,preco2,preco3,preco4,preco5])

  return (
    <View style={styles.container}>
      <ItemCardapio
        titulo="Spaghetti ao molho sugo"
        imagem="spaghetti"
        descricao="Spaghetti fresco com tomates orgânicos"
        preco={22}
        total={preco1}
        handler={setPreco1}
      />
      <ItemCardapio
        titulo="Paccheri à bolonhesa"
        imagem="paccheri"
        descricao="Autêntico paccheri com molho à bolonhesa."
        preco={30}
        total={preco2}
        handler={setPreco2}
      />
      <ItemCardapio
        titulo="Lasanha de carne"
        imagem="lasanha"
        descricao="Lasanha caseira feita no dia"
        preco={28}
        total={preco3}
        handler={setPreco3}
      />
      <ItemCardapio
        titulo="Almôndegas"
        imagem="almondegas"
        descricao="Deliciosa porção de almôndegas caseiras."
        preco={12}
        total={preco4}
        handler={setPreco4}
      />
      <ItemCardapio
        titulo="Vinho Tinto do Porto"
        imagem="vinho"
        descricao="Uma taça de autêntico vinho do porto."
        preco={8}
        total={preco5}
        handler={setPreco5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

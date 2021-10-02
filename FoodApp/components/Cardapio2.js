import React, {useEffect} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import useState from 'react-usestateref'

import ItemCardapio from './ItemCardapio';

const Cardapio2 = (props) => {
  const [preco1,setPreco1] =  useState(0);
  const [preco2,setPreco2] =  useState(0);
  const [preco3,setPreco3] =  useState(0);
  const [preco4,setPreco4] =  useState(0);
  const [preco5,setPreco5] =  useState(0);

  useEffect(() => {
      props.handler(preco1+preco2+preco3+preco4+preco5)
    }, [preco1,preco2,preco3,preco4,preco5])

  return (
    <View>
      <ItemCardapio
        titulo="Spaghetti ao molho sugo"
        imagem="spaghetti"
        descricao="Spaghetti fresco com tomates orgânicos"
        preco={22}
        amount={preco1}
        handler={setPreco1}
      />
      <ItemCardapio
        titulo="Paccheri à bolonhesa"
        imagem="paccheri"
        descricao="Autêntico paccheri com molho à bolonhesa."
        preco={30}
        amount={preco2}
        handler={setPreco2}
      />
      <ItemCardapio
        titulo="Lasanha de carne"
        imagem="lasanha"
        descricao="Lasanha caseira feita no dia"
        preco={28}
        amount={preco3}
        handler={setPreco3}
      />
      <ItemCardapio
        titulo="Almôndegas"
        imagem="almondegas"
        descricao="Deliciosa porção de almôndegas caseiras."
        preco={12}
        amount={preco4}
        handler={setPreco4}
      />
      <ItemCardapio
        titulo="Vinho Tinto do Porto"
        imagem="vinho"
        descricao="Uma taça de autêntico vinho do porto."
        preco={8}
        amount={preco5}
        handler={setPreco5}
      />
    </View>
  );
}

export default Cardapio2
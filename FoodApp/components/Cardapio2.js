import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import useState from 'react-usestateref'

import ItemCardapio from './ItemCardapio';

const Cardapio2 = (props)=> {
  const [amountCardapio,setAmountCardapio] = useState(0)

  return (
    <View>
      <ItemCardapio
        titulo="Macarrão"
        imagem="macarrao"
        descricao="macarronada de domingo"
        preco={20}
        amount={amountCardapio}
        handler={setAmountCardapio}
      />
    </View>
  );
}

export default Cardapio2
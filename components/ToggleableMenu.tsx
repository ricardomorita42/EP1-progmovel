import React, {useState, Dispatch, SetStateAction} from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { Text, View } from './Themed';

import Cardapio1 from "./Cardapio1";
import Cardapio2 from "./Cardapio2";

interface props {
  id: number;
  total:number;
  handler: Dispatch<SetStateAction<number>>;
  nomeRest:string;
}

export default function ToggleableMenu({id, total,handler,nomeRest}:props) {
  let tipoRestaurante = null

  switch (id) {
    case 1:
      tipoRestaurante = 
      <Cardapio1 
        total={total} 
        handler={handler}
      />
      break;
    case 2:
      tipoRestaurante = 
      <Cardapio2 
        total={total} 
        handler={handler}
      />
      break;
    default:
      tipoRestaurante = 
      <Cardapio1 
        total={total} 
        handler={handler}
      />
      break;
  }

  const [toggle,setToggle] = useState(false);
  const [active,setActive] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={styles.button}
      disabled={!active}
      onPress={()=> {
        setToggle(!toggle);
        setActive(!active)
      }}
    >
    {
      //Menu Fechado
      toggle==false?
      <Text style={styles.title}>
        {nomeRest}
      </Text>
      :
      //Menu Aberto
      <>
        <TouchableOpacity
          onPress={()=> {
            setToggle(!toggle);
            setActive(!active)
          }}
        >
          <Text style={styles.title}>
            {nomeRest}
          </Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </TouchableOpacity>
        
        {tipoRestaurante}
      </>
    }
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    marginBottom: 0,
    alignItems:"center",
    justifyContent:"center",
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
  button: {
    alignItems:"center",
    justifyContent:"center",
    padding:20
  },
});

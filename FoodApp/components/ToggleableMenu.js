import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import useState from 'react-usestateref'

import Cardapio1 from "./Cardapio1";
import Cardapio2 from "./Cardapio2";

const ToggleableMenu = (props) => {
  let tipoRestaurante = null

  switch (props.id) {
    case 1:
      tipoRestaurante = 
      <Cardapio1 
        total={props.total} 
        handler={props.handler}
      />
      break;
    case 2:
      tipoRestaurante = 
      <Cardapio2 
        total={props.total} 
        handler={props.handler}
      />
      break;
    default:
      tipoRestaurante = 
      <Cardapio1 
        total={props.total} 
        handler={props.handler}
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
        {props.nomeRest}
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
            {props.nomeRest}
          </Text>
        </TouchableOpacity>
        
        {tipoRestaurante}
      </>
    }
    </TouchableOpacity>
  </View>
  );
}

export default ToggleableMenu;

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
  altContainer: {
    backgroundColor: 'gray',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
},
  buttonPadding: {
    paddingHorizontal: 15,
  },
  button: {
    alignItems:"center",
    justifyContent:"center",
    padding:20
  },
  title: {
    fontSize:24,
    fontWeight:'bold',
  },
});
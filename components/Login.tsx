import React, {useState} from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button, StyleSheet, Image} from 'react-native';

import { Text, View } from './Themed';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [linkImg,setLinkImg] = useState('');
  const [isLoading,setIsLoading] = useState(true);
  let userData = ''

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '548636586279-8o69114kgd47jlf9ia3lqpat9v6itqk6.apps.googleusercontent.com',
    webClientId: '548636586279-a7rm4r5r7e3qnnbkr2ekjr4lase2e9h9.apps.googleusercontent.com',
  });

  const getInfo = async () => {
    try {
      const resultado =  await fetch(userData);
      const json = await resultado.json();
      
      setName(json.name);
      setEmail(json.email);
      setLinkImg(json.picture);
      
      setIsLoading(false);
    } catch (error){
      console.error(error);
      console.log('whoops');
    }
  }

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { params } = response;
      const { access_token } = params;
      /*console.log(JSON.stringify(access_token));*/
      userData = `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
      /*console.log(userData);*/
      getInfo();
    }
    /*console.log(JSON.stringify(response));*/
  }, [response]);

  return (
    <View>
     
    {
      isLoading==true?
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
      :
      <View style = {{justifyContent:'center'}}>
        <Text>Nome: {name} </Text>
        <Text>E-mail: {email} </Text>
        <Image
          source={{uri:linkImg}}
          style = {{width:100, height:100}}
        />
      </View>
    }
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

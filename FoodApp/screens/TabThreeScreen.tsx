import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import { StyleSheet } from 'react-native';
import { Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

WebBrowser.maybeCompleteAuthSession();

export default function TabThree({ navigation }: RootTabScreenProps<'TabThree'>) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    responseType: "id_token",
    expoClientId: '548636586279-4m9dh86in2575o6u6jfrecon49sf15qa.apps.googleusercontent.com',
    webClientId: '548636586279-a7rm4r5r7e3qnnbkr2ekjr4lase2e9h9.apps.googleusercontent.com',
    androidClientId: '548636586279-8o69114kgd47jlf9ia3lqpat9v6itqk6.apps.googleusercontent.com'
    }); 

        var storageValue = ''

    React.useEffect(() => {
      if (response?.type === 'success') {
        const { authentication } = response;
        storageValue = JSON.stringify(response.type)
        }
    }, [response]);
    
    console.log('response',response)

    return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to you account</Text>
      <Text> Here you can login into your Google account.</Text>
      <Text>Status: {storageValue}</Text>
      
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabThreeScreen.tsx" />
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

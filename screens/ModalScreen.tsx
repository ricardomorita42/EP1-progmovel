import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import Login from '../components/Login';

export default function ModalScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Google{"\n"}</Text>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7b733',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding:10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

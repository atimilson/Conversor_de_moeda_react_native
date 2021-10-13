import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Picker from './src/components/Picker'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor='#efd'/>
      <View style={styles.areaMoeda}>
         <Text style={styles.titulo}>
           ADICIONE UMA MOEDA
         </Text>
         <Picker />

      </View>
      <View style={[styles.areaValor,styles.areaMoeda]}>
        <Text style={styles.titulo}>Digite um valor para converter em (R$)</Text>  
        <TextInput
        placeholder="EX: 150" 
        style={styles.input}

        />
      </View> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop : 40,
  },
  areaMoeda:{
    width: '90%',
    backgroundColor: '#f9f9f9',
    paddingTop:9,
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
    marginBottom: 1,

  },
  titulo:{
    fontSize: 16,
    color: '#000',
    paddingTop:5,
    paddingLeft:5,
    marginBottom: 10, 
  },
  input:{
    width: '100%',
    padding: 10,
    height: 46,
    fontSize: 18,
    color: '#000',
  }

});

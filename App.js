import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor='#efd'/>
    

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
});

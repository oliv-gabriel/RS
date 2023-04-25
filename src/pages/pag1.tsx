import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';

export function Firstpag(){
  return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gerar contrato</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gerenciamento de contratos</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#011640'
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginVertical: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
// Calculadora

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Switch, SafeAreaView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [texto, setTexto] = useState('')
  const [ligado, setLigado] = useState(false);
  const [amizade, setAmizade] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcular = () => {
    const valor = Number(texto);
    let total = valor + (valor * amizade);
    if (ligado) {
      total = Math.round(total);
    }
    setResultado(total);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calculadora de juros</Text>
       <TextInput style={styles.textInput}
          placeholder="Dinheiro emprestado"
          value={texto}
        onChangeText={setTexto}/>
      <Text style={styles.text}>Quanto a pessoa é sua amiga? </Text>

      <View style={styles.horizontalContainer}>
      <Pressable style={[styles.button, amizade === 0.0 && styles.buttonSelecionado]} onPress={() => setAmizade(0)}></Pressable>
      <Text>Melhor amigo(sem juros para os brothers)</Text>
      </View>

      <View style={styles.horizontalContainer}>
      <Pressable style={[styles.button, amizade === 0.05 && styles.buttonSelecionado]}  onPress={() => setAmizade(0.05)}></Pressable>
      <Text>Amigo(5%)</Text>
      </View>

      <View style={styles.horizontalContainer}>
      <Pressable style={[styles.button, amizade === 0.10 && styles.buttonSelecionado]} onPress={() => setAmizade(0.10)}></Pressable>
      <Text>Colega(10%)</Text>
      </View>

      <View style={styles.horizontalContainer}>
      <Pressable style={[styles.button, amizade === 0.25 && styles.buttonSelecionado]}  onPress={() => setAmizade(0.25)}></Pressable>
      <Text>Desconhecido(25%)</Text>
      </View>
      
      <View style={styles.toggleContainer}>
      <Text>Arredondar? </Text>
       <Switch value={ligado} onValueChange={setLigado}/>
      </View>

      <Text>Valor a ser recebido</Text>

      <View style={styles.resultContainer}>
        <Text style={styles.title}>R$ {resultado.toFixed(2)}</Text>
        <Pressable style={styles.calculateButton} onPress={calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </Pressable>
      </View>
      

    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 16,
    gap: 20
  },

   title: {
    fontSize: 30,
    fontWeight: 'bold'
  },

   textInput: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 10,
  }, 

   text: {
    color: 'red'
  },

   button: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: 'purple',
   },

   horizontalContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center'
   },

   toggleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
   },

   calculateButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 8,
  },
  
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },

  resultContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    gap: 50,
  },

  buttonSelecionado: {
  backgroundColor: 'purple',
},
});

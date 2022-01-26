import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function App() {

  const [valor, setValor] = useState(0);
  const [resultado, setResultado] = useState(0);

  const converte = () => {
    var gf = parseInt(valor);
    var gc = (gf - 32) * 5/9;
    var result = gc.toFixed(0);
    setResultado(result);
  }

  return (
    
    <View style={estilos.container}>
      <StatusBar barStyle="light-content" backgroundColor="#F7C544"/>
      <Text style={estilos.titulo}>Converta °F em °C</Text>

      <TextInput style={estilos.campos}
      value={String(valor)}
      onChangeText={(texto)=>{setValor(texto)}}
      placeholder="Digite os graus em Fahrenheit">
      </TextInput>

      <TouchableOpacity 
      onPress={()=>converte()}
      style={estilos.button}>
        <Text style={estilos.textButton}>Converter</Text>
      </TouchableOpacity>

      <Text style={estilos.titulo}>Resultado</Text>
      <View style={estilos.card}>
        <Text style={estilos.textCard}>
          {resultado} °C
        </Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7C544',
  },

  titulo: {
    color: '#0A0807',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    margin: 20,
  },

  campos: {
    width: '80%',
    padding: 10,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 5,
    shadowColor: 'rgba(10, 8, 7, 0.5)',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 2,
    elevation: 10,
    fontFamily: 'Roboto',
  },

  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#0A0807',
    shadowColor: 'rgba(10, 8, 7, 0.5)',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 2,
    elevation: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  textButton: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'Roboto',
  },

  card: {
    backgroundColor: '#0A0807',
    borderRadius: 5,
    width: '60%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },

  textCard: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  }
});
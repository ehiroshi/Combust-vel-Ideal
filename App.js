import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';

export default function App () {
  const [etanol, onChangeEtanol] = React.useState('');
  const [gasolina, onChangeGasolina] = React.useState('');
  const [resultado, setResultado] = React.useState('');
  
  function verificar(){
    const e = parseFloat(etanol);
    const g = parseFloat(gasolina);

    if (isNaN(e) || isNaN(g) ) {
      setResultado('Digite valores validos');
      return;
    }

    if (e < 0.7 * g) {
      setResultado('compensa mais abastecer com Etanol');
    }else {
      setResultado('compensa mais abastecer com Gasolina');
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Gasolina ou Alcool? </Text>
      <Image
        style={styles.imagem}
        source={require("./assets/posto.jpg")}
      />
      <TextInput
      style={styles.preco}
      onChangeText={onChangeEtanol}
      value={etanol}
      placeholder='Digite o preço do Etanol: '
      />
      <TextInput
      style={styles.preco}
      onChangeText={onChangeGasolina}
      value={gasolina}
      placeholder='Digite o preço da Gasolina: '
      />
      <TouchableOpacity style={styles.botao} onPress={verificar}>
      <Text style={styles.textoBotao}>
       VERIFICAR VANTAGEM
      </Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>
        {resultado}
      </Text>
      
    
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  texto: {
    fontSize: 25,
    top: -70,
    backgroundColor: 'yellow',
    padding: 30,
    fontWeight: 'bold',
  },
  imagem: {
    top: -90,
    height: 150,
    width: 300,

  },
  preco: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    marginVertical: 8,
    padding: 10,
    borderRadius: 10,
  },
  resultado: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    backgroundColor: 'yellow',
    padding: 12,
    width: 260,
    textAlign: 'center',
    borderRadius: 10,
  },
  botao: {
    backgroundColor: 'yellow',
    padding: 15,
    borderRadius: 20,
    width: 250,
    alignItems: 'center',
  },
  textoBotao: {
    color: 'black',
    fontWeight: 'bold', 
  }


});

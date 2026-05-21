import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default function App() {
  let preco_gasolina = 5.59;
  let preco_etanol = 3.49;
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Gasolina ou Alcool? </Text>
      <Image
        style={styles.imagem}
        source={require("./assets/posto.jpg")}
      />
      <TextInput
      style={styles.preco}
      placeholder='Digite o preço do Etanol: '
      />
      <TextInput
      style={styles.preco}
      placeholder='Digite o preço da Gasolina: '
      />
        <Button
        title='VERIFICAR VANTAGEM'
        
      />
      
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 25,
    top: -120,
    backgroundColor: 'yellow',
    padding: 30,
    fontWeight: 'bold',
  },
  imagem: {
    top: -120,
    height: 150,
    width: 300,
  },
  preco: {
    fontSize: 20,
    top: -100,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    margin: 5,
  },


});

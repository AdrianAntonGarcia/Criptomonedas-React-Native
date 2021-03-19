import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';

const App = () => {
  return (
    <View style={styles.general}>
      <Header />
      <Image
        style={styles.imagen}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.contenido}>
        <Formulario />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
  general: {
    height: '100%',
    backgroundColor: '#FFF',
  },
});

export default App;

import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Cotizacion from './components/Cotizacion';
import Formulario from './components/Formulario';
import Header from './components/Header';
import axios from 'axios';

const App = () => {
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [consultarAPI, setConsultarAPI] = useState(false);
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const res = await axios.get(url);
        setResultado(res.data.DISPLAY[criptomoneda][moneda]);
        setConsultarAPI(false);
      }
    };
    cotizarCriptomoneda();
  }, [consultarAPI, criptomoneda, moneda]);

  return (
    <View style={styles.general}>
      <Header />
      <Image
        style={styles.imagen}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.contenido}>
        <Formulario
          moneda={moneda}
          criptomoneda={criptomoneda}
          setMoneda={setMoneda}
          setCriptomoneda={setCriptomoneda}
          setConsultarAPI={setConsultarAPI}
        />
        <Cotizacion resultado={resultado} />
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

/** Aplicación creada por Alvaro Sebastian Tabares Gaviria
 * Esta aplicación es una calculadora basada en la calculadora de iOS
 * Se pone en práctica muchos conceptos básicos de React Native en compañía de TS
 * Puedes encontrar más repositorios de guías en mi perfil de github astabaresg
 * Basado en la información del curso React Native: Aplicaciones nativas para IOS y Android
 * Del docente Fernando Herrera
 */
import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';
import {appTheme} from '../theme/appTheme';

/*
Pantalla principal de la calculadora tipo iOS
*/
export const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();

  return (
    <View style={appTheme.calculadoraContainer}>
      {/* SOLO muestra el numero anterior si es distinto de 0 */}
      {numeroAnterior !== '0' && (
        <Text style={appTheme.resultadoAnterior}> {numeroAnterior} </Text>
      )}
      <Text style={appTheme.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      {/* Fila de botones */}
      <View style={appTheme.fila}>
        <BotonCalc text="C" color="#9B9B9B" onPress={limpiar} />
        <BotonCalc text="+/-" color="#9B9B9B" onPress={positivoNegativo} />
        <BotonCalc text="del" color="#9B9B9B" onPress={btnDelete} />
        <BotonCalc text="/" color="#FF9427" onPress={btnDividir} />
      </View>
      {/* Fila de botones */}
      <View style={appTheme.fila}>
        <BotonCalc text="7" onPress={armarNumero} />
        <BotonCalc text="8" onPress={armarNumero} />
        <BotonCalc text="9" onPress={armarNumero} />
        <BotonCalc text="X" color="#FF9427" onPress={btnMultiplicar} />
      </View>
      {/* Fila de botones */}
      <View style={appTheme.fila}>
        <BotonCalc text="4" onPress={armarNumero} />
        <BotonCalc text="5" onPress={armarNumero} />
        <BotonCalc text="6" onPress={armarNumero} />
        <BotonCalc text="-" color="#FF9427" onPress={btnRestar} />
      </View>
      {/* Fila de botones */}
      <View style={appTheme.fila}>
        <BotonCalc text="1" onPress={armarNumero} />
        <BotonCalc text="2" onPress={armarNumero} />
        <BotonCalc text="3" onPress={armarNumero} />
        <BotonCalc text="+" color="#FF9427" onPress={btnSumar} />
      </View>
      {/* Fila de botones */}
      <View style={appTheme.fila}>
        <BotonCalc text="0" onPress={armarNumero} ancho />
        <BotonCalc text="." onPress={armarNumero} />
        <BotonCalc text="=" color="#FF9427" onPress={calcular} />
      </View>
    </View>
  );
};

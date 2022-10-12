/**
 * Componente para dar manejo a los botones de la calculadora
 */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  color?: string;
  onPress: ( numeroTexto:string ) => void;
  text: string;
  ancho?: boolean;
}

export const BotonCalc = ({color = '#2D2D2D', text, ancho = false, onPress}: Props) => {
  return (
    <TouchableOpacity 
    onPress={() => onPress(text)}
    >
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9B9B9B' ? '#000B0D' : '#F2F2F2',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

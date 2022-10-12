import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { appTheme } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style = {appTheme.fondo}>
      <StatusBar
        backgroundColor='#000B0D'
        barStyle='light-content'
      />
      <CalculadoraScreen/>
    </SafeAreaView>
  )
}

export default App;
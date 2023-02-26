import React from 'react';
import { SafeAreaView } from 'react-native';
// import { HolaMundoScreens } from './src/screens/HolaMundoScreens';
// import { ContadorScreen } from './src/screens/ContadorScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';

export const App = () => {
  return (
    <SafeAreaView 
      style={{flex:1}}
    >
        {/* <HolaMundoScreens/> */}
        {/*  <ContadorScreen/> */}
        <BoxObjectModelScreen/>
    </SafeAreaView>
  )
}


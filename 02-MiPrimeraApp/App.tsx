import React from 'react';
import { SafeAreaView } from 'react-native';
// import { HolaMundoScreens } from './src/screens/HolaMundoScreens';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';

export const App = () => {
  return (
    <SafeAreaView 
      style={{flex:1}}
    >
        {/* <HolaMundoScreens/> */}
        {/*  <ContadorScreen/> */}
        {/* <BoxObjectModelScreen/> */}
        <DimensionesScreen/>
    </SafeAreaView>
  )
}


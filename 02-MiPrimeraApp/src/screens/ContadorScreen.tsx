import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
    
    const [contador, setContador] = useState(10);

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Contador: {contador}</Text>

            <Fab title="+1" onPress={ () => setContador( contador + 1)} position = 'br'/>

            <Fab title="-1" onPress={ () => setContador( contador - 1)} position = 'bl'/>
{/* 
            <TouchableOpacity
                style={styles.fabLocationBL}
                onPress={ () => setContador(contador - 1)}
            >
                <View style={ styles.fab}>
                    <Text style={styles.fabText}>-1</Text>
                </View>
            </TouchableOpacity> */}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -10
    }
})

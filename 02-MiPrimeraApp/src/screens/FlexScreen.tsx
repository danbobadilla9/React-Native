import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style= {styles.caja1}>Caja 1</Text>
            <Text style= {styles.caja2}>Caja 2</Text>
            <Text style= {styles.caja3}>Caja 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#28C4D9',
        // flexDirection: 'row-reverse'
        // flexDirection: 'row'
        // flexDirection: 'column-reverse'

        //JUSTIFYCONTENT depende de el flexDirection
        flexDirection: 'row',

        justifyContent: 'space-between' 
        // justifyContent: 'space-between' 
        // justifyContent: 'space-around' distribucion equitativamente 
        // justifyContent: 'center' //se centro relativo al padre
        // justifyContent: 'flex-end'
    },
    caja1: {
        // width:100,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja2: {
        // width:100,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja3: {
        // width:100,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    }
})


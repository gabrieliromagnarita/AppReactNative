import {Text, View, StyleSheet, ScrollView, Button, Image} from 'react-native';
import { useState } from 'react';

export default function Counter(){
    const [contador, setContador] = useState(0)

    function Aumentar(){
        setContador(contador + 1)
    }
    
    function Diminuir(){
        setContador(contador - 1)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.container}>
                <Text style={styles.title}>Contador:</Text><br/>
                <Text style={styles.text}>Contador: {contador}</Text><br/>
                <View style={styles.button}>
                    <Button 
                    title='+' 
                    color={'red'}
                    onPress={Aumentar}/>

                    <Button 
                    title='-' 
                    color={'red'}
                    onPress={Diminuir}/>
                </View>
            </Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 63,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text:{
        fontSize: 30,
        textAlign: 'center',
    },
    button:{
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    }
})
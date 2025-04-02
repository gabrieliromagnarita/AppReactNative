import {TextInput, Text, View, StyleSheet, ScrollView, Button, Image, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function Counter(){
    const [contador, setContador] = useState(0)

    function Aumentar(){
        setContador(contador + 1)
    }
    
    function Diminuir(){
        if (contador > 0){
            setContador(contador - 1)
        }
    }

    return(
        <View style={styles.container}>
            {/* <Text style={styles.container}> */}
                <Text style={styles.title}>Contador:</Text><br/>
                <Text style={styles.text}>Contador: {contador}</Text><br/>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.botao} onPress={Aumentar}>
                        <Text style={styles.textBotao}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={Diminuir}>
                        <Text style={styles.textBotao}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewInput}>
                    <TextInput style={styles.input} placeholder="Nome:"/>
                    <TextInput style={styles.input} placeholder="Email:"/>
                </View>
            {/* </Text> */}
        </View>
    )
}

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-evenly',
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
    row:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    botao:{
        backgroundColor: 'pink',
        width: '30%',
        borderRadius: 5,
    },
    textBotao:{
        textAlign: 'center',
        color: 'blue',
        fontSize: 20,
    },
    input:{
        height: 60,
        width: 300,
        borderWidth: 4,
        fontSize: 30,
        borderRadius: 10,
        borderColor: 'blue',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
    },
    viewInput:{
        backgroundColor: 'pink',
        width: '100%',
        height: '20%',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})
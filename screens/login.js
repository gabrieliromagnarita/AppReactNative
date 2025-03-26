import {Text, View, StyleSheet, TextInput, Button, ImageBackground, Alert} from 'react-native';

import image from '../assets/background.jpg';

export default function Login({navigation}){
    return(
        <View style={styles.all}>
            <ImageBackground style={{flex:1}} source={image}>
                <View style={styles.top}>
                <Text style={styles.textNome}>LOGIN</Text>
                </View>
                <View style={styles.middle}>
                    <TextInput style={styles.input} placeholder="Usuário:"/>
                    <TextInput style={styles.input} placeholder="Senha:"/>
                </View>
                <View style={styles.bottom}>
                    <Button title="Confirmar" color='black' onPress={() => navigation.navigate('Home')} />
                </View>
            </ImageBackground>
        </View>
    )
}

export const styles = StyleSheet.create({
    all:{
        flex: 1,
    },
    top:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middle:{
        flex:2,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    bottom:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    textNome:{
        fontSize: 63,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input:{
        height: 60,
        width: 300,
        borderWidth: 4,
        fontSize: 30,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
    },
})
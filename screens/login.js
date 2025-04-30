import {Text, View, StyleSheet, TextInput, Button, ImageBackground} from 'react-native';
import { useState } from 'react';
import image from '../assets/background2.jpg';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../controller';

export default function Login({navigation}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const verifyUser = () => {
        signInWithEmailAndPassword(auth, email, senha).then(userCredential => {
            console.log('usuário logado', userCredential.user.email);
            navigation.navigate('HomeTab');
        })
        .catch((error) => {
            console.log('erro ao logar', error.message)
        });
    }
    return(
        <View style={styles.all}>
            <ImageBackground source={image} style={{flex:1}}>
                <View style={styles.top}>
                <Text style={styles.textNome}>LOGIN</Text>
                </View>
                <View style={styles.middle}>
                    <TextInput style={styles.input} placeholder="Email:" value={email} onChangeText={setEmail}/>
                    <TextInput style={styles.input} placeholder="Senha:" value={senha} onChangeText={setSenha} secureTextEntry={true}/>
                </View>
                <View style={styles.bottom}>
                    <Button title="Entrar" color='black' onPress={verifyUser}/>
                    <Button title="Cadastrar-se" color='black' onPress={() => navigation.navigate('Cadastrar')} />
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
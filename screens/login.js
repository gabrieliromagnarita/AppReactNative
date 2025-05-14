import {Text, View, StyleSheet, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useState } from 'react';
/* import image from '../assets/background2.jpg'; */
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
            <ImageBackground source={{uri:'https://i.pinimg.com/736x/0a/bc/68/0abc6811083fdd5d272d96d428c0cfe3.jpg'}} style={{height:"100%", width:"100%"}}>
                <View style={styles.top}>
                <Text style={styles.textNome}>LOGIN</Text>
                </View>
                <View style={styles.middle}>
                    <TextInput style={styles.input} placeholder="Email:" value={email} onChangeText={setEmail}/>
                    <TextInput style={styles.input} placeholder="Senha:" value={senha} onChangeText={setSenha} secureTextEntry={true}/>
                </View>
                <View style={styles.bottom}>
                    <Button title="Entrar" color='black' onPress={verifyUser}/>
                    <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')}><Text style={styles.txtcadast}>Cadastrar-se</Text></TouchableOpacity>
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
    txtcadast:{
        fontSize: 20,
        color: 'black',
        
    }
})
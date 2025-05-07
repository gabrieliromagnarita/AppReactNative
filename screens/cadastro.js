import {Text, View, StyleSheet,  TextInput, Button, ImageBackground} from 'react-native'
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../controller';

export default function Cadastro({navigation}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const cadastroUser = () => {
        createUserWithEmailAndPassword(auth, email, senha).then(userCredential => {
            console.log('cadastrado!',userCredential.user.email);
            navigation.navigate('Login');
          })
          .catch((error) => {
            console.log('erro', error.message);
          });
    }

    return(
        <View style={styles.all}>
            <ImageBackground source={require('../assets/background1.jpg')}   style={{height:"100%", width:"100%"}}>
                <View style={styles.top}>
                    <Text style={styles.textNome}>CADASTRO</Text>
                </View>
                <View style={styles.middle}>
                    <TextInput style={styles.input} placeholder="Email:" value={email} onChangeText={setEmail}/>
                    <TextInput style={styles.input} placeholder="Senha:" value={senha} onChangeText={setSenha} secureTextEntry={true}/>
                </View>
                <View style={styles.bottom}>
                    <Button title="Cadastrar" color='#000' onPress={cadastroUser}/>
                    <Button title="Login" color='#000' onPress={() => navigation.navigate('Login')} />
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
        color: 'black'
    },
    input:{
        height: 60,
        width: 300,
        borderWidth: 4,
        fontSize: 30,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        borderColor: 'black'
    },
})
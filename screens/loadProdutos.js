import { View, Text, TextInput, StyleSheet, Button, ImageBackground } from "react-native";
import { useState } from "react";

export default function CadastrarProd(){
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [imagem, setImagem] = useState("");

    return(
        <View style={styles.all}>
            <ImageBackground source={{uri:'https://i.pinimg.com/736x/e1/ec/fe/e1ecfe07db215ef9adca82469f5d1638.jpg'}} style={{height:"100%", width:"100%"}}>
                <View style={styles.middle}>
                    <TextInput style={styles.input} placeholder="Nome:" value={nome} onChangeText={setNome}/>
                    <TextInput style={styles.input} placeholder="Valor:" value={valor} onChangeText={setValor}/>
                    <TextInput style={styles.input} placeholder="Imagem:" value={imagem} onChangeText={setImagem}/>
                </View>
                <View style={styles.bottom}>
                    <Button title="Confirmar" color="black"/>
                </View>
            </ImageBackground>
        </View>
    )
}

export const styles = StyleSheet.create({
    all:{
        flex: 1,
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
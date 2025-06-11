import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function Card({nome, valor, img, comprar, remover}){
    return(
        <View style={styles.card}>
            <Image style={styles.foto} source={img}/>
            <View style={styles.subCard}>
                <Text style={styles.text2}>{nome}</Text>
                <Text style={styles.text3}>R${valor}</Text>
                {comprar &&<Button title='Comprar' onPress={comprar} color='#F09'/>}
                {remover &&<Button title='Excluir' onPress={remover} color='#F09'/>}
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    text2:{
        fontSize: 20,
        color: '#000',
        fontFamily: 'helvetica',
        fontWeight: 'bold'
    },
    text3:{
        fontSize: 20,
        color: '#000',
        fontFamily: 'helvetica'
    },
    card:{
        padding: 10,
        margin: 10,
        backgroundColor: '#f094',
        borderRadius: 8,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    foto:{
        height: 120,
        width: 120,
        borderColor: '#F099',
        borderWidth: 5,
        borderRadius: 8,
    },
    subCard:{
        alignItems: 'flex-start',
        padding: 10
    },
})
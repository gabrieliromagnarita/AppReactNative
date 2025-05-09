import { View, Text, StyleSheet, Image } from "react-native";

export default function Card({nome, valor, img}){
    return(
        <View style={styles.card}>
            <Image style={styles.foto} source={img}/>
            <View style={styles.subCard}>
                <Text style={styles.text2}>{nome}</Text>
                <Text style={styles.text2}>R${valor}</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    text2:{
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
    }
})
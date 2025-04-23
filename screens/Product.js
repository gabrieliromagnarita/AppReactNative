import {View, Text, StyleSheet, FlatList} from 'react-native'
import { useState } from 'react'
import Card from './card'


export default function Product(){
    const [produtos, setProdutos] = useState([
        {id: 1, nome: 'Camiseta', valor: 99.99, img: require('../assets/camiseta.jpg')},
        {id: 2, nome: 'Moletom', valor: 159.90, img:require('../assets/moletom.jpg')},
        {id: 3, nome: 'Tênis', valor: 89.90, img: require('../assets/tênis.jpg')},
        {id: 4, nome: 'Calça', valor: 250.00, img:  require('../assets/pants.jpg')}
    ])

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Lista de Produtos</Text>
            <FlatList data={produtos} renderItem={({ item }) => (
                <Card nome={item.nome} valor={item.valor} img={item.img}/>
            )}
            keyExtractor={item => item.id}/>
            {/*ARRAY COM MAP!!
            <Text style={styles.text}>Lista de Produtos</Text>
            {produtos.map((item) => (
                <Text style={styles.text2}>{item.nome} - R${item.valor}</Text>
            ))} */}
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    text:{
        fontSize: 30,
        color: '#f09',
        fontFamily: 'helvetica'
    },
})
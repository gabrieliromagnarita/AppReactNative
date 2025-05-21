import {View, Text, StyleSheet, FlatList} from 'react-native'
import { useState, useEffect } from 'react'
import Card from './card'
import { db } from '../controller'
import { collection, getDocs } from 'firebase/firestore'
import { useCarrinho } from '../components/ProviderCart'

export default function Product({navigation}){
    const [produtos, setProdutos] = useState([]);
    const {adicionarProduto} = useCarrinho();

    useEffect(() => {
        async function loadProdutos() {
            try{
                const querySnapshot = await getDocs(collection(db, 'produtos'));
                const lista = [];
                querySnapshot.forEach((doc) => {
                    lista.push({id: doc.id, ...doc.data() });
                });
                setProdutos(lista);
            }catch(error) {
                console.log("Erro ao buscar produtos", error);
            }
        }

        loadProdutos();
    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Lista de Produtos</Text>
            <FlatList data={produtos} renderItem={({ item }) => (
                <Card nome={item.nome} 
                valor={item.valor}
                img={item.imagem}
                comprar={() => {adicionarProduto(item);
                    navigation.navigate('Carrinho');
                }}/>
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
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import { useCarrinho } from "../components/ProviderCart";
import Card from "./card";

export default function Carrinho({navigation}){
    const {carrinho, removerProduto} = useCarrinho();
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text1}>Carrinho</Text>
                <FlatList 
                    data={carrinho}
                    renderItem={({item, index}) => (
                        <Card nome={item.nome} 
                        valor={item.valor}
                        img={item.imagem}
                        remover={() => {removerProduto(index);
                            navigation.navigate('Carrinho');
                        }}/>
                    )}
                />
            </View>
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
    },
    text1:{
        fontSize: 30,
        color: '#F099',
        fontFamily: 'helvetica',
        fontWeight: 'bold'
    },
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
    foto:{
        height: 120,
        width: 120,
        borderColor: '#F099',
        borderWidth: 5,
        borderRadius: 8,
    },
    product:{
        margin: 10,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    subView:{
        alignItems: 'flex-start',
        padding: 10
    },
})
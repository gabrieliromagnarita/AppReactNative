import { View, Text, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import { useCarrinho } from "../components/ProviderCart";

export default function Carrinho({navigation}){
    const {carrinho} = useCarrinho();
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text1}>Carrinho</Text>
                <FlatList 
                    data={carrinho}
                    renderItem={({item}) => (
                        <View style={styles.product}>
                            <Image style={styles.foto} source={{uri: item.imagem}}/>
                            <View style={styles.subView}>
                                <Text style={styles.text2}>{item.nome}</Text>
                                <Text style={styles.text3}>R${item.valor}</Text>
                            </View>
                        </View>
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
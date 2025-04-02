import {Text, View, StyleSheet, Image} from 'react-native';

export default function FeedFotos({navigation}){
    return(
        <View style={styles.all}>
            <View style={styles.top}>
                <Text style={styles.text}>Feed de Looks!</Text>
            </View>
            <View style={styles.middletop}>
                <Image style={styles.foto} source={require('../assets/feed1.jpg')}/>
                <Image style={styles.foto} source={require('../assets/feed2.jpg')}/>
                <Image style={styles.foto} source={require('../assets/feed3.jpg')}/>
            </View>
            <View style={styles.middle}>
                <Image style={styles.foto} source={require('../assets/feed4.jpg')}/>
                <Image style={styles.foto} source={require('../assets/feed5.jpg')}/>
                <Image style={styles.foto} source={require('../assets/feed6.jpg')}/>
            </View>
            <View style={styles.middlebottom}>
                <Image style={styles.foto} source={require('../assets/feed7.jpg')}/>
                <Image style={styles.foto} source={require('../assets/feed8.jpg')}/>
                <Image style={styles.foto} source={require('../assets/feed9.jpg')}/>
            </View>
            <View style={styles.bottom}>
                  <Text style={styles.text}>Quer postar o seu? </Text>
            </View>
        </View>
    )
}

export const styles= StyleSheet.create({
    all:{
        flex: 1,
        backgroundColor: 'white',
    },
    top:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middletop:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    middle:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    middlebottom:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    foto:{
        height: 130,
        width: 130,
        borderWidth: 5,
        borderColor: '#fff',
    },
    text:{
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';

import image from '../assets/background3.jpg';

export default function Home(){
    return(
        <View style={styles.all}>
            <ImageBackground style={{flex:1}} source={image}>
                <View style={styles.top}>
                    <Text style={styles.textName}>FASHIONIFY</Text>
                </View>
                <View style={styles.middleTop}>
                    <Image style={styles.foto} source={require('../assets/outfit1.jpg')}/>
                    <Image style={styles.foto} source={require('../assets/outfit2.jpg')}/>
                    <Image style={styles.foto} source={require('../assets/outfit5.jpg')}/>
                </View>
                <View style={styles.middle}>
                    <Text style={styles.textSlogan}>Torne seu mundo mais FASHION!</Text>
                </View>
                <View style={styles.middleBottom}>
                    <Image style={styles.foto} source={require('../assets/outfit3.jpg')}/>
                    <Image style={styles.foto} source={require('../assets/outfit4.jpg')}/>
                    <Image style={styles.foto} source={require('../assets/outfit6.jpg')}/>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.text}>FASHIONIFY é um aplicativo que ajuda você a catalogar seus looks favoritos, além de encontrar novas combinações maravilhosas para cada ocasião que você venha a passar.<br></br>Bora testar?
                    </Text>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleTop:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    middle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleBottom:{
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
    textSlogan:{
        fontSize: 35,
        textAlign: 'center',
    },
    textName:{
        fontSize: 63,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text:{
        fontSize: 23,
        textAlign: 'center',
    },
})
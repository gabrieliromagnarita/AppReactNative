import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';

import image from '../assets/bg.jpg';

export default function Atividade (){
    
    return(
        <View style={styles.atividade}>
            <ImageBackground style={{flex:1}} source={image}>
                <View style={styles.top}>
                    <Text style={styles.text}>GALERIA DE FOTOS</Text>
                    <Text style={styles.textSub}>Esses aqui são o Nagito Komaeda de Danganronpa 2 (ultimate lucky student), e o Kokichi Ouma de Danganronpa V3 (ultimate evil supreme leader), eles são muito queridos e eu amo eles.</Text>
                </View>
                <View style={styles.middleTop}>
                    <Image style={styles.foto} source={{uri: 'https://steamuserimages-a.akamaihd.net/ugc/942835159257438954/7F55D05D501193DD6A11B86490656F6AA0E5DFB4/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'}}/>
                    <Image style={styles.foto} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8fnSOGzTVo6mZeYPcMoj_bY056gXYTio-w&s'}}/>
                </View>
                <View style={styles.middle}>
                    <Text style={styles.text}>TEM ESSAS TAMBÉM</Text>
                </View>
                <View style={styles.middleBottom}>
                    <Image style={styles.foto} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3FkkK7q92DmXtFp-mVZ5-eLTpofMrt5uavA&s'}}/>
                    <Image style={styles.foto} source={{uri: 'https://wallpapers.com/images/hd/monokuma-dfrmcnw8xpbsav1s.jpg'}}/>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.text}>créditos</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

/* export default function x (){
    return(
        <View style={styles.container}>
            <Text>AAAA</Text>
        </View>
    );
} */

export const styles = StyleSheet.create({

    atividade:{
        flex: 1,
    },
    top:{
        flex: 2, //dá para colocar número decimal (ex= 0.2 , 1.5)
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingStart: 10,
    },
    middleTop:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    middle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingEnd: 10,
    },
    middleBottom:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    bottom:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    foto:{
        height: 146,
        width: 175,
        borderWidth: 8,
        borderColor: '#ed0f87',
    },
    text:{
        fontSize: 26,
        color: '#ed0f87',
        fontWeight: 'bold',
    },
    textSub:{
        fontSize: 16,
        color: '#ed0f87',
    }
})



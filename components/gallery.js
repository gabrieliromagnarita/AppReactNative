import {Text, View, StyleSheet, Image} from 'react-native';

export function Profile(){
    return(
        <View style={styles.profile}> {/* link do google */}
            <Image style={styles.img} source={{uri: 'https://media.tenor.com/mBEyUNmpITgAAAAM/wisp-kitten.gif'}}/>
            <Image style={styles.img} source={{uri: 'https://media.tenor.com/77K5_Sva5BUAAAAM/wisp-kitten.gif'}}/>
            <Text>AAAA</Text>
            <Text>Alguma coisa</Text>
        </View>
    );

}

export function Favorites(){
    return(
        <View style={styles.favorites}> {/* gif salvo */}
            <Image style={styles.img} source={require('../assets/monokuma.gif')}/>
            <Text>AAAA</Text>
            <Text>Texto criativo</Text>
        </View>
    );

}

export function Atividade(){
    return(
        <View style={styles.atividade}>
            <Text style={styles.text1}>ABC</Text>
            <Image style={styles.foto} source={{uri: 'https://steamuserimages-a.akamaihd.net/ugc/942835159257438954/7F55D05D501193DD6A11B86490656F6AA0E5DFB4/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'}}/>
            <Image style={styles.foto} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8fnSOGzTVo6mZeYPcMoj_bY056gXYTio-w&s'}}/>
            <Text style={styles.text2}>DEF</Text>
            <Image style={styles.foto} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3FkkK7q92DmXtFp-mVZ5-eLTpofMrt5uavA&s'}}/>
            <Image style={styles.foto} source={{uri: 'https://wallpapers.com/images/hd/monokuma-dfrmcnw8xpbsav1s.jpg'}}/>
            <Text style={styles.text3}>GHI</Text>
        </View>
    )
}

export default function Gallery (){
    return(
        <View style={styles.container}>
            <Text>AAAA</Text>
        </View>
    );
}

export const styles = StyleSheet.create({
    /* container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ed0f87',
        justifyContent: 'center',
    },
    profile:{
        flex: 3,
        backgroundColor: '#4d6052',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    favorites:{
        flex: 1,
        backgroundColor: '#890302',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img:{
        height: 150,
        width: 150,
        
    }, */
    atividade:{
        flex: 1,
        backgroundColor: '#ed0f87',
    },
    foto:{
        height: 150,
        width: 150,
    },
    text1:{
        justifyContent: 'flex-start',
    },
    text2:{
        justifyContent: 'flex-end',
    },
    text3:{
        justifyContent: 'center',
    },
})
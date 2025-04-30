import {Text, ScrollView, View, StyleSheet} from 'react-native';

import image from '../assets/background4.jpg';

export default function FeedPosts({}){
    return(
        <View style={styles.all}>
            <ImageBackground style={{flex:1}} source={image}>
                <ScrollView>
                    <View style={styles.top}>
                        <Text style={styles.textTitle}>Feed de Posts!</Text>
                    </View>
                    <View style={styles.middletoptop}>
                        <Text style={styles.textUser}>@miumiu</Text>
                        <Text style={styles.text}>I hate having just basic stuff to wear ughhhhh I need a new wardrobe ASAP!!!!</Text> 
                    </View>
                    <View style={styles.middletop}>
                        <Text style={styles.textUser}>@kaeyay</Text>
                        <Text style={styles.text}>Just watched the new @sayakamaizono MV and I'm OBSESSED with the pink look</Text>
                    </View>
                    <View style={styles.middle}>
                        <Text style={styles.textUser}>@KO</Text>
                        <Text style={styles.text}>Can anyone send me money for new clothes pretty please????👉👈</Text>
                    </View>
                    <View style={styles.middlebottom}>
                        <Text style={styles.textUser}>@starman</Text>
                        <Text style={styles.text}>Just posted a fit check, any thoughts?</Text>
                    </View>
                    <View style={styles.middlebottombottom}>
                        <Text style={styles.textUser}>@makiroll</Text>
                        <Text style={styles.text}>Can someone tell @sherlock caps have been out of fashion for a long time</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export const styles= StyleSheet.create({
    all:{
        flex: 1,
    },
    top:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middletoptop:{
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    middletop:{
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    middle:{
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    middlebottom:{
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    middlebottombottom:{
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 23,
        textAlign: 'left',
    },
    textUser:{
        fontSize: 23,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    textTitle:{
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})
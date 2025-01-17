import * as React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { appLogo } from '../assets/svgs';

const CustomHeader = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image style={styles.logoImageStyle} resizeMode='contain' source={require('../assets/onlyLogosdm5.png')} />

            {/* <SvgXml style={styles.icon} width={50} height={50} xml={appLogo} /> */}
            {/* <Icon
                style={styles.icon}
                type='Ionicons'
                onPress={() => { props.navigation.openDrawer() }}
                name="menu" size={30} color="#000" /> */}
        </View>
    );

};

export default CustomHeader;

const styles = StyleSheet.create({
    logoImageStyle:{
        height: 50,
width:50
    },
    container: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginBottom:5
    },
    title: {
        // flex: 1,
        color: '#1E281E',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: 'IRANSansWeb(FaNum)',
        fontWeight: 'bold',

    },
    icon: {
        marginHorizontal: 15,
    },
});

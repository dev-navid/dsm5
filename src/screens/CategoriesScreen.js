import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import PatternBackground from '../components/PatternBackground';
import {SvgXml} from 'react-native-svg';
import {logoWhite} from '../assets/svgs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CategoryItem from '../components/CategoryItem';

const CategoriesScreen = (props) => {
    const tempList = [
        {
            _id: '5fc4eca3b31a2d2dedf34dc9',
            picture: 'http://placehold.it/32x32',
            size: 1,
            color: 'green',
            name: 'MEDESIGN',
        }, {
            _id: '5fc4eca3b31a2d2dedf34dc9',
            picture: 'http://placehold.it/32x32',
            size: 1,
            color: 'orange',
            name: 'MEDESIGN',
        },
        {
            _id: '5fc4eca3a0f784d04071b8e4',
            picture: 'http://placehold.it/32x32',
            size: 2,
            color: 'blue',
            name: 'ORBIFLEX',
        },
        {
            _id: '5fc4eca3fe0cf09ab9d4020a',
            picture: 'http://placehold.it/32x32',
            size: 3,
            color: 'gray',
            name: 'ZENSUS',
        },
        {
            _id: '5fc4eca32d7a7d53b722f6b7',
            picture: 'http://placehold.it/32x32',
            size: 3,
            color: 'brown',
            name: 'MINGA',
        },
        {
            _id: '5fc4eca35cc8d2569e99175b',
            picture: 'http://placehold.it/32x32',
            size: 2,
            color: 'pink',
            name: 'FUELWORKS',
        },
        {
            _id: '5fc4eca30759b12d30dbb790',
            picture: 'http://placehold.it/32x32',
            size: 2,
            color: 'black',
            name: 'ZENSOR',
        }, {
            _id: '5fc4eca30759b12d30dbb790',
            picture: 'http://placehold.it/32x32',
            size: 3,
            color: 'red',
            name: 'ZENSOR',
        },
        {
            _id: '5fc4eca30759b12d30dbb790',
            picture: 'http://placehold.it/32x32',
            size: 3,
            color: 'orange',
            name: 'ZENSOR',
        }, {
            _id: '5fc4eca30759b12d30dbb790',
            picture: 'http://placehold.it/32x32',
            size: 2,
            color: 'yellow',
            name: 'ZENSOR',
        },
    ];
    return (
        <PatternBackground>
            <View style={styles.container}>
                <SvgXml style={styles.logoStyle} width={100} height={100} xml={logoWhite}/>
                <Text style={styles.title}>شاخصه های اصلی</Text>
            </View>
            <FlatList
                data={tempList}
                style={{paddingHorizontal: wp('2%')}}
                emptyListComponent={<View><Text>هنوز حسابی ایجاد نکرده اید</Text></View>}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                    <CategoryItem item={item} index={index} onPress={() => props.navigation?.navigate('Forms')}/>
                )}
            />
        </PatternBackground>
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '100%',
        flex: 1,
        marginTop: hp('10%'),
    },
    logoStyle: {
        alignSelf: 'center',
    }, title: {
        alignSelf: 'center',
        fontSize: 19,
        color: 'black',
        fontWeight: '400',
    },
});



import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import PatternBackground from '../components/PatternBackground';
import { SvgXml } from 'react-native-svg';
import CategoryGridItem from '../components/CategoryGridItem';
import CustomHeader from '../components/CustomHeader';
import { acceptDisable, gridMode, listMode } from '../assets/svgs';
// import CategoryRowItem from '../components/CategoryRowItem';
import ExpandableView from '../components/ExpandleItem/ExpandableView'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const CategoriesScreen = ({ route, navigation }) => {

    const [loading, setLoading] = useState(false);
    const [gridList, setGridList] = useState(true);
    const { list } = route.params;

    function changeMenuButton() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
        if (gridList) {
            setGridList(false);
        } else {
            setGridList(true);
        }
    }

    return (
        <PatternBackground>
            <CustomHeader title={'شاخصه های اصلی'} />
            {loading ?
                <View style={styles.loadingContainer}>
                    <ActivityIndicator color='black' size='large' />
                </View> :
                <View>
                    {gridList ?
                        <FlatList
                            data={list}
                            numColumns={2}
                            key={'_'}
                            style={styles.container}
                            contentContainerStyle={styles.contentContainerStyle}
                            emptyListComponent={<View><ActivityIndicator /></View>}
                            keyExtractor={(item, index) => '_' + index.toString()}
                            renderItem={({ item, index }) => (
                                <CategoryGridItem item={item} index={index}
                                    onPress={() => navigation?.navigate('Forms', { list: item.forms })} />
                            )}
                        /> :
                        <FlatList
                            data={list}
                            key={'#'}
                            numColumns={1}
                            style={styles.container}
                            contentContainerStyle={styles.contentContainerStyle}
                            emptyListComponent={<View><ActivityIndicator /></View>}
                            keyExtractor={(item, index) => '#' + index.toString()}
                            renderItem={({ item, index }) => (
                                <ExpandableView item={item} index={index} navigation={navigation}
                                    onPress={() => navigation?.navigate('Forms', { list: item.forms })} />
                            )}
                        />
                    }
                    <TouchableOpacity
                        onPress={() => changeMenuButton()}
                        style={styles.icon}>
                        {gridList ?
                            <SvgXml
                                width={25}
                                height={25}
                                style={styles.fabIcon}
                                xml={listMode}
                            /> :
                            <SvgXml
                                width={25}
                                style={styles.fabIcon}
                                height={25}
                                xml={gridMode}
                            />
                        }
                    </TouchableOpacity>
                </View>
            }
        </PatternBackground>);
};

export default CategoriesScreen;


const styles = StyleSheet.create({
    fabIcon: {
        // backgroundColor:'white'
    },
    container: {
        // alignItems:'center',
        marginBottom: 60
    },
    contentContainerStyle: {
        alignSelf: 'center',
        // marginBottom:30
    },
    loadingContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    icon: {
        width: 70,
        height: 70,
        borderRadius: 35,
        elevation: 3,
        // backgroundColor: '#5DA071',
        backgroundColor: 'gray',
        alignItems: 'center',
        position: 'absolute',
        // alignSelf:'flex-start',
        // right: wp('7%'),
        left:wp('7%'),
        bottom: hp('12%'),
        // padding: 10,
        // right: 10,

        justifyContent: 'space-around',
        // marginTop: 100,
        // flexDirection: 'row',
    },
});



import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, FlatList, TouchableOpacity} from 'react-native';
import PatternBackground from '../components/PatternBackground';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomHeader from '../components/CustomHeader';
import SQLite from 'react-native-sqlite-storage';
import Card from '../components/Card';
import {reject, rejectDisable, accept, acceptDisable} from '../assets/svgs';
import {SvgXml} from 'react-native-svg';
import CustomButton from '../components/CustomButton';

const TreeScreen = ({route, navigation}) => {

    const [currentTree, setCurrentTree] = useState([]);
    const {formId} = route.params;

    useEffect(() => {
        const db = SQLite.openDatabase(
            {
                name: 'dsm5.db',
                location: 'default',
                createFromLocation: '~www/dsm5.db',
            },
            () => {
            },
            error => {
                console.log(error);
            },
        );
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM tree WHERE formId = ' + '\'' + formId + '\'', [], (tx, results) => {
                const rows = results.rows;
                // console.log(rows.item(0));
                setCurrentTree(rows.item(0));
            });
        });
    }, []);

    function runTreeQuery(targetId) {
        const db = SQLite.openDatabase(
            {
                name: 'dsm5.db',
                location: 'default',
                createFromLocation: '~www/dsm5.db',
            },
            () => {
            },
            error => {
                console.log(error);
            },
        );
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM tree WHERE formId = \'' + formId + '\' AND id= \'' + targetId + '\'', [], (tx, results) => {
                const rows = results.rows;
                // console.log(rows.item(0));
                setCurrentTree(rows.item(0));
            });
        });
    }

    // if (showButtons) {
    return (
        <PatternBackground>
            <CustomHeader title={' Decision Tree'}/>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Text style={styles.title}>{currentTree.title}</Text>
                </Card>
                <View style={styles.buttonLayout}>
                    {
                        currentTree.noId != null ?
                            <CustomButton
                                onPress={() => getNextQuestion(false)} title={'خیر'} buttonColor={'#991535'}/> :
                            currentTree.noId == null && currentTree.yesId == null ? null :
                                <CustomButton title={'خیر'} buttonColor={'#767676'}/>
                    }
                    {
                        currentTree.yesId != null ?
                            <CustomButton
                                onPress={() => getNextQuestion(true)} title={'بله'} buttonColor={'#5DA071'}/> :
                            currentTree.noId == null && currentTree.yesId == null ? null :
                                <CustomButton title={'بله'} buttonColor={'#767676'}/>
                    }
                    {/*IMAGE BUTTONS*/}
                    {/*{*/}
                    {/*    currentTree.noId != null ?*/}
                    {/*        <CustomButton*/}
                    {/*            onPress={() => getNextQuestion(false)} style={styles.buttonActive} title={'خیر '}/>*/}
                    {/*        // <SvgXml onPress={() => getNextQuestion(false)} style={styles.logoStyle} width={100}*/}
                    {/*        //         height={100} xml={reject}/>*/}
                    {/*        :*/}
                    {/*        currentTree.noId == null && currentTree.yesId == null ?*/}
                    {/*            null*/}
                    {/*            :*/}
                    {/*            <CustomButton style={styles.buttonActive} title={'خیر '}/>*/}
                    {/*    // <SvgXml style={styles.logoStyle} width={100}*/}
                    {/*    //         height={100} xml={rejectDisable}/>*/}
                    {/*}*/}
                    {/*{*/}
                    {/*    currentTree.yesId != null ?*/}
                    {/*        <SvgXml onPress={() => getNextQuestion(true)} style={styles.logoStyle} width={100}*/}
                    {/*                height={100} xml={accept}/>*/}
                    {/*        :*/}
                    {/*        currentTree.noId == null && currentTree.yesId == null ?*/}
                    {/*            null*/}
                    {/*            :*/}
                    {/*            <SvgXml style={styles.logoStyle} width={100}*/}
                    {/*                    height={100} xml={acceptDisable}/>*/}
                    {/*}*/}
                </View>
            </View>
        </PatternBackground>
    );

    function getNextQuestion(answerStatus) {
        if (answerStatus) {
            if (currentTree.yesId != null) {
                runTreeQuery(currentTree.yesId);
            } else {
                alert('Not exist answer');
            }
        } else {
            if (currentTree.noId != null) {
                runTreeQuery(currentTree.noId);
            } else {
                alert('Not exist answer');
            }
        }
    }
};

export default TreeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    card: {
        alignSelf: 'center',
        width: wp('95%'),
        paddingHorizontal: wp('2%'),
        backgroundColor: 'floralwhite',
        borderRadius: 15,
        height: 250,
        justifyContent: 'center',
    },
    title: {
        alignSelf: 'center',
        marginTop: 15,
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'IRANSansWeb(FaNum)',
    },
    button: {
        padding: 100,
        width: 100,
        flex: 1,
    },
    buttonLayout: {
        justifyContent: 'space-around',
        marginTop: 100,
        flexDirection: 'row',
    },
    logoStyle: {},
    buttonActive: {
        backgroundColor: '#5DA071',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },

});

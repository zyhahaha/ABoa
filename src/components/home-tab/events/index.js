import React from 'react';
import {
    SafeAreaView, ScrollView,
    StyleSheet,
    View
} from 'react-native';
import { Text, Card } from '@rneui/themed';

export default () => {
    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <View style={{
                        height: 500,
                        paddingTop: 10,
                        paddingLeft: 10
                    }}>
                        <View style={{
                            height: 300,
                            borderStyle: 'solid',
                            borderLeftWidth: 2,
                            borderLeftColor: '#ccc'
                        }}>
                            <View style={{
                                height: 10,
                                width: 10,
                                borderRadius: 10,
                                backgroundColor: '#ccc'
                            }}></View>
                            <Text>xxx</Text>

                            <View style={{
                                marginLeft: -6,
                                height: 10,
                                width: 10,
                                borderRadius: 10,
                                backgroundColor: '#ccc'
                            }}></View>
                            <Text>xxx</Text>
                        </View>
                   </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

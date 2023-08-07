import React from 'react';
import { View, FlatList, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import { Icon, Image, Tab, Text, TabView } from '@rneui/themed';

const BASE_URI = 'https://source.unsplash.com/random?sig=';
const styles = StyleSheet.create({
    list: {
        width: '100%',
        backgroundColor: '#000',
    },
    item: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,
    },
});


export default () => {
    return (
        <>
            <SafeAreaView>
                <FlatList
                    data={[...new Array(10)].map((_, i) => i.toString())}
                    style={styles.list}
                    numColumns={2}
                    keyExtractor={(e) => e}
                    renderItem={({ item }) => (
                        <Image
                            source={{ uri: 'http://119.96.189.81:7788/images/%E6%9A%97%E9%BB%91%E6%B3%95%E6%9C%AF%E5%B7%A5%E5%8E%82.png' }}
                            containerStyle={styles.item}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    )}
                />
            </SafeAreaView>
        </>
    );
};
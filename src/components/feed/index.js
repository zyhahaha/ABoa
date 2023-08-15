import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Text, Image } from '@rneui/themed';

export default class Photo extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
                <View style={{
                    position: 'relative',
                    height: 200
                }}>
                    <Image
                        source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }}
                        containerStyle={{
                            width: '100%',
                            flex: 1,
                        }}
                        PlaceholderContent={<ActivityIndicator />}
                    />

                    <View style={{
                        position: 'absolute',
                        bottom: 50,
                        left: 30,
                    }}>
                        <Image
                            source={{ uri: 'https://miniapp.gtimg.cn/public/appicon/0e72cbdeae235360067c453edb17b6c0_200.jpg' }}
                            containerStyle={{
                                width: 50,
                                height: 50,
                                borderRadius: 50
                            }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    </View>
                    <View style={{
                        position: 'absolute',
                        bottom: 58,
                        left: 90,
                    }}>
                        <Text style={{
                            color: '#fff'
                        }}>赵小福</Text>
                        <Text style={{
                            color: '#fff'
                        }}>4个月28天</Text>
                    </View>

                    <View style={{
                        position: 'absolute',
                        bottom: 2,
                        left: 0,
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            flex: 1,
                            height: 25,
                        }}><Text style={{ textAlign: 'center', color: '#fff' }}>首页</Text></View>
                        <View style={{
                            flex: 1,
                            height: 25,
                        }}><Text style={{ textAlign: 'center', color: '#fff' }}>相册</Text></View>
                        <View style={{
                            flex: 1,
                            height: 25,
                        }}><Text style={{ textAlign: 'center', color: '#fff' }}>成长记录</Text></View>
                    </View>

                    <View style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        flexDirection: 'row'
                    }}>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#2D8cF0' }}>
                            <Text style={{ textAlign: 'center', color: '#2D8cF0' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#2D8cF0' }}>
                            <Text style={{ textAlign: 'center', color: '#2D8cF0' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#2D8cF0' }}>
                            <Text style={{ textAlign: 'center', color: '#2D8cF0' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#2D8cF0' }}>
                            <Text style={{ textAlign: 'center', color: '#2D8cF0' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#2D8cF0' }}>
                            <Text style={{ textAlign: 'center', color: '#2D8cF0' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#2D8cF0' }}>
                            <Text style={{ textAlign: 'center', color: '#2D8cF0' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#2D8cF0' }}>
                            <Text style={{ textAlign: 'center', color: '#2D8cF0' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#2D8cF0' }}>
                            <Text style={{ textAlign: 'center', color: '#2D8cF0' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#2D8cF0' }}>
                            <Text style={{ textAlign: 'center', color: '#2D8cF0' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: 'transparent' }}>---</Text>
                        </View>
                    </View>
                </View>
            </>
        )
    }
}

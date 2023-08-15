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
                        source={{ uri: 'http://119.96.189.81:7788/ABoa/9993.jpg' }}
                        containerStyle={{
                            width: '100%',
                            flex: 1,
                        }}
                        PlaceholderContent={<ActivityIndicator />}
                    />

                    <View style={{
                        opacity: this.props.tabIndex === 1 ? 0 : 1,
                        position: 'absolute',
                        bottom: 50,
                        left: 30,
                    }}>
                        <Image
                            source={{ uri: 'http://119.96.189.81:7788/ABoa/9995.jpg' }}
                            containerStyle={{
                                width: 50,
                                height: 50,
                                borderRadius: 50
                            }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    </View>
                    <View style={{
                        opacity: this.props.tabIndex === 1 ? 0 : 1,
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
                        // opacity: this.props.tabIndex === 1 ? 0 : 1,
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
                        // opacity: this.props.tabIndex === 1 ? 0 : 1,
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        flexDirection: 'row'
                    }}>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: this.props.tabIndex === 0 ? '#2D8cF0' : 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: this.props.tabIndex === 0 ? '#2D8cF0' : 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: this.props.tabIndex === 0 ? '#2D8cF0' : 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: this.props.tabIndex === 0 ? '#2D8cF0' : 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: this.props.tabIndex === 0 ? '#2D8cF0' : 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: this.props.tabIndex === 0 ? '#2D8cF0' : 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: this.props.tabIndex === 1 ? '#2D8cF0' : 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: this.props.tabIndex === 1 ? '#2D8cF0' : 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: this.props.tabIndex === 1 ? '#2D8cF0' : 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: this.props.tabIndex === 1 ? '#2D8cF0' : 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: this.props.tabIndex === 1 ? '#2D8cF0' : 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: this.props.tabIndex === 1 ? '#2D8cF0' : 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: this.props.tabIndex === 2 ? '#2D8cF0' : 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: this.props.tabIndex === 2 ? '#2D8cF0' : 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: this.props.tabIndex === 2 ? '#2D8cF0' : 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: this.props.tabIndex === 2 ? '#2D8cF0' : 'transparent' }}>---</Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: this.props.tabIndex === 2 ? '#2D8cF0' : 'transparent' }}>
                            <Text style={{ textAlign: 'center', color: this.props.tabIndex === 2 ? '#2D8cF0' : 'transparent' }}>---</Text>
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

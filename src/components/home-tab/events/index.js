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
                        paddingTop: 10,
                        paddingLeft: 10,
                        backgroundColor: '#F5F5F5'
                    }}>
                        <View style={{
                            borderStyle: 'solid',
                            borderLeftWidth: 2,
                            borderLeftColor: '#E4E4E4'
                        }}>
                            {/* 身高体重 */}
                            <View style={{
                                marginBottom: 15
                            }}>
                                <View style={{
                                    marginLeft: -6,
                                    height: 10,
                                    width: 10,
                                    borderRadius: 10,
                                    borderStyle: 'solid',
                                    borderColor: '#F3C026',
                                    borderWidth: 2,
                                    backgroundColor: '#F5F5F5'
                                }}></View>
                                <View style={{
                                    marginTop: -15,
                                    marginLeft: 10,
                                    marginBottom: 10
                                }}>
                                    <Text>6月17日</Text>
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    padding: 10,
                                    backgroundColor: '#fff'
                                }}>
                                    <Text style={{
                                        fontSize: 14
                                    }}>身高  60 cm</Text>
                                    <Text style={{
                                        fontSize: 14
                                    }}>体重  5.6 kg</Text>
                                    <Text style={{
                                        marginTop: 5,
                                        fontSize: 12,
                                        color: '#8F8F8F'
                                    }}>6月17日 15.00</Text>
                                </View>
                            </View>
                            {/* 身高体重 */}
                            <View style={{
                                marginBottom: 15
                            }}>
                                <View style={{
                                    marginLeft: -6,
                                    height: 10,
                                    width: 10,
                                    borderRadius: 10,
                                    borderStyle: 'solid',
                                    borderColor: '#F3C026',
                                    borderWidth: 2,
                                    backgroundColor: '#F5F5F5'
                                }}></View>
                                <View style={{
                                    marginTop: -15,
                                    marginLeft: 10,
                                    marginBottom: 10
                                }}>
                                    <Text>4月29日</Text>
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    padding: 10,
                                    backgroundColor: '#fff'
                                }}>
                                    <Text style={{
                                        fontSize: 14
                                    }}>身高  54.5 cm</Text>
                                    <Text style={{
                                        fontSize: 14
                                    }}>体重  4.1 kg</Text>
                                    <Text style={{
                                        marginTop: 5,
                                        fontSize: 12,
                                        color: '#8F8F8F'
                                    }}>4月29日 15.03</Text>
                                </View>
                            </View>
                            {/* 身高体重 */}
                            <View style={{
                                marginBottom: 15
                            }}>
                                <View style={{
                                    marginLeft: -6,
                                    height: 10,
                                    width: 10,
                                    borderRadius: 10,
                                    borderStyle: 'solid',
                                    borderColor: '#F3C026',
                                    borderWidth: 2,
                                    backgroundColor: '#F5F5F5'
                                }}></View>
                                <View style={{
                                    marginTop: -15,
                                    marginLeft: 10,
                                    marginBottom: 10
                                }}>
                                    <Text>3月17日</Text>
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    padding: 10,
                                    backgroundColor: '#fff'
                                }}>
                                    <Text style={{
                                        fontSize: 14
                                    }}>身高  49 cm</Text>
                                    <Text style={{
                                        fontSize: 14
                                    }}>体重  2.85 kg</Text>
                                    <Text style={{
                                        marginTop: 5,
                                        fontSize: 12,
                                        color: '#8F8F8F'
                                    }}>3月17日 16.00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

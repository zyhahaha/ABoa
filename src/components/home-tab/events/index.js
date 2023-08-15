import React from 'react';
import {
    SafeAreaView, ScrollView,
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';
import { Text, Image } from '@rneui/themed';

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
                            {/* 每日 */}
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
                                    <Text>8月15日</Text>
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    padding: 10,
                                    backgroundColor: '#fff'
                                }}>
                                    <Text style={{
                                        fontSize: 14
                                    }}>小福今天4个月28天了</Text>
                                    <Text style={{
                                        marginTop: 5,
                                        fontSize: 12,
                                        color: '#8F8F8F'
                                    }}>8月15日 8:00</Text>
                                </View>
                            </View>
                            {/* 照片 */}
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
                                    <Text>7月22日</Text>
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    backgroundColor: '#fff',
                                    flexDirection: 'row'
                                }}>
                                    <Image
                                        source={{ uri: 'http://119.96.189.81:7788/ABoa/9992.jpg' }}
                                        containerStyle={{
                                            aspectRatio: 1,
                                            // width: 120,
                                            borderRadius: 10,
                                            flex: 1,
                                        }}
                                        PlaceholderContent={<ActivityIndicator />}
                                        onPress={() => {
                                            // console.log('xxx', index)
                                            // this.setState({
                                            //     modalVisible: true,
                                            //     index
                                            // })
                                        }}
                                    />

                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        flex: 1,
                                        marginTop: 5,
                                        paddingLeft: 10,
                                    }}>
                                        <View>
                                            <Text style={{
                                                fontWeight: 'bold',
                                                fontSize: 14,
                                            }}>上传了一张照片</Text>
                                            <Text style={{
                                                marginTop: 5,
                                                fontSize: 12,
                                                color: '#8F8F8F'
                                            }}>7月22日 15:30</Text>
                                        </View>
                                    </View>
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
                                    }}>6月17日 15:00</Text>
                                </View>
                            </View>
                            {/* 照片 */}
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
                                    <Text>6月16日</Text>
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    backgroundColor: '#fff',
                                    flexDirection: 'row'
                                }}>
                                    <Image
                                        source={{ uri: 'http://119.96.189.81:7788/ABoa/999.jpg' }}
                                        containerStyle={{
                                            aspectRatio: 1,
                                            // width: 120,
                                            borderRadius: 10,
                                            flex: 1,
                                        }}
                                        PlaceholderContent={<ActivityIndicator />}
                                        onPress={() => {
                                            // console.log('xxx', index)
                                            // this.setState({
                                            //     modalVisible: true,
                                            //     index
                                            // })
                                        }}
                                    />

                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        flex: 1,
                                        marginTop: 5,
                                        paddingLeft: 10,
                                    }}>
                                        <View>
                                            <Text style={{
                                                fontWeight: 'bold',
                                                fontSize: 14,
                                            }}>上传了一张照片</Text>
                                            <Text style={{
                                                marginTop: 5,
                                                fontSize: 12,
                                                color: '#8F8F8F'
                                            }}>6月16日 15:00</Text>
                                        </View>
                                    </View>
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
                                    }}>4月29日 15:03</Text>
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
                                    }}>3月17日 16:00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

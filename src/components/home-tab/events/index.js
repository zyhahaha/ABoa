import React from 'react';
import {
    Modal,
    SafeAreaView, ScrollView,
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';
import { Text, Image } from '@rneui/themed';
import ImageViewer from 'react-native-image-zoom-viewer';
import computeCountDays from './utils/compute.js'

import recordList from './data/record.js'

export default () => {
    const [imagesUrl, setImagesUrl] = React.useState([]);
    const [imageIndex, setImageIndex] = React.useState(0);
    const [modalVisible, setModalVisible] = React.useState(false);

    const nowMonth = (new Date()).getMonth() + 1
    const nowDate = (new Date()).getDate()
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
                                    <Text>{nowMonth}月{nowDate}日</Text>
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    padding: 10,
                                    backgroundColor: '#fff'
                                }}>
                                    <Text style={{
                                        fontSize: 16
                                    }}>小福今天{computeCountDays(Date.parse('2023-03-17')).days}天了</Text>
                                    <View style={{
                                        paddingTop: 10,
                                        paddingBottom: 10
                                    }}>
                                        <Text style={{
                                            fontSize: 16
                                        }}>今日奶量：</Text>
                                        <Text style={{
                                            fontSize: 14
                                        }}>05: 30   150ml</Text>
                                        <Text style={{
                                            fontSize: 14
                                        }}>05: 30   150ml</Text>
                                        <Text style={{
                                            fontSize: 14
                                        }}>05: 30   150ml</Text>
                                    </View>
                                    <Text style={{
                                        marginTop: 5,
                                        fontSize: 12,
                                        color: '#8F8F8F'
                                    }}>{nowMonth}月{nowDate}日 8:00</Text>
                                </View>
                            </View>

                            {/* 列表 */}
                            {
                                recordList.map((recordItem, recordIndex) => {
                                    return (
                                        <View key={recordIndex.toString()} style={{
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
                                                <Text>{recordItem.date}</Text>
                                            </View>
                                            {
                                                recordItem.contents.map((recordContentItem, recordContentIndex) => {
                                                    if (recordContentItem.type === 'photo') {
                                                        // 照片
                                                        return (
                                                            <View key={recordContentIndex.toString()} style={{
                                                                marginBottom: 15,
                                                                marginLeft: 10,
                                                                backgroundColor: '#fff',
                                                                flexDirection: 'row'
                                                            }}>
                                                                <Image
                                                                    source={{ uri: recordContentItem.url }}
                                                                    containerStyle={{
                                                                        aspectRatio: 1,
                                                                        // width: 120,
                                                                        borderRadius: 10,
                                                                        flex: 1,
                                                                    }}
                                                                    PlaceholderContent={<ActivityIndicator />}
                                                                    onPress={() => {
                                                                        setImagesUrl([{ url: recordContentItem.url }])
                                                                        setModalVisible(true)
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
                                                                        }}>{recordContentItem.text}</Text>
                                                                        <Text style={{
                                                                            marginTop: 5,
                                                                            fontSize: 12,
                                                                            color: '#8F8F8F'
                                                                        }}>{recordContentItem.time}</Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        )
                                                    } else if (recordContentItem.type === 'BMI') {
                                                        // 身高体重
                                                        return (
                                                            <View key={recordContentIndex.toString()} style={{
                                                                marginBottom: 15,
                                                                marginLeft: 10,
                                                                padding: 10,
                                                                backgroundColor: '#fff'
                                                            }}>
                                                                <Text style={{
                                                                    fontSize: 14
                                                                }}>身高  {recordContentItem.height} cm</Text>
                                                                <Text style={{
                                                                    fontSize: 14
                                                                }}>体重  {recordContentItem.weight} kg</Text>
                                                                <Text style={{
                                                                    marginTop: 5,
                                                                    fontSize: 12,
                                                                    color: '#8F8F8F'
                                                                }}>{recordContentItem.time}</Text>
                                                            </View>
                                                        )
                                                    }
                                                })
                                            }
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

            <View
                style={{
                    padding: 10
                }}
            >
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    animationType="slide"
                    statusBarTranslucent={true}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <ImageViewer
                        imageUrls={imagesUrl}
                        index={imageIndex}
                        onSwipeDown={() => {
                            () => setModalVisible(false)
                        }}
                        onClick={() => {
                            setModalVisible(false)
                        }}
                        enableSwipeDown={true}
                    />
                </Modal>
            </View>
        </>
    );
};

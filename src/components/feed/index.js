import React, { Component } from 'react';
// import { View, Modal, TouchableNativeFeedback, Text } from 'react-native';
// import { Icon, Image, Tab, Text, TabView } from '@rneui/themed';
import { View, Modal } from 'react-native';
import { Text, Card } from '@rneui/themed';
import ImageViewer from 'react-native-image-zoom-viewer';

// const images = [{
//     // Simplest usage.
//     url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

//     // width: number
//     // height: number
//     // Optional, if you know the image size, you can set the optimization performance

//     // You can pass props to <Image />.
//     props: {
//         // headers: ...
//     }
// }, {
//     url: '',
//     props: {
//         // Or you can set source directory.
//         source: require('../../../../assets/splash.png')
//     }
// }]

export default class Photo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            modalVisible: false
        }
    }

    render() {
        return (
            <>
                <Card>
                    {/* <Card.Title>HELLO WORLD</Card.Title>
                    <Card.Divider /> */}
                    <Card.Image
                        style={{ padding: 0 }}
                        source={{
                            uri:
                                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                        }}
                    />
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component
                        structure than actual design.
                    </Text>
                </Card>

                {/* <View
                    style={{
                        padding: 10
                    }}
                >
                    <Modal
                        visible={this.state.modalVisible}
                        transparent={true}
                        onRequestClose={() => this.setState({ modalVisible: false })}
                    >
                        <ImageViewer
                            imageUrls={images}
                            index={this.state.index}
                            onSwipeDown={() => {
                                console.log('onSwipeDown');
                                () => this.setState({ modalVisible: false })
                            }}
                            onMove={data => console.log(data)}
                            enableSwipeDown={true}
                        />
                    </Modal>
                </View> */}
            </>
        )
    }
}

// const BASE_URI = 'https://source.unsplash.com/random?sig=';
// const styles = StyleSheet.create({
//     list: {
//         width: '100%',
//         backgroundColor: '#000',
//     },
//     item: {
//         aspectRatio: 1,
//         width: '100%',
//         flex: 1,
//     },
// });


// export default () => {
//     return (
//         <>
//             <SafeAreaView>
//                 <FlatList
//                     data={[...new Array(10)].map((_, i) => i.toString())}
//                     style={styles.list}
//                     numColumns={2}
//                     keyExtractor={(e) => e}
//                     renderItem={({ item }) => (
//                         <Image
//                             source={{ uri: 'http://119.96.189.81:7788/images/%E6%9A%97%E9%BB%91%E6%B3%95%E6%9C%AF%E5%B7%A5%E5%8E%82.png' }}
//                             containerStyle={styles.item}
//                             PlaceholderContent={<ActivityIndicator />}
//                         />
//                     )}
//                 />
//             </SafeAreaView>
//         </>
//     );
// };
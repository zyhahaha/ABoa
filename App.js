import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen'; // 控制启动页的包

import MainStackScreen from './src/libs/MainStackScreen'
// import { navigate } from './src/RootNavigation'; // 这个是封装的一个工具，用来进行在js代码中的跳转的

export default function App() {
  const [appIsReady, setAppIsReady] = useState(true);
  // const [root, setRoot] = useState();
  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); // 保证项目启动后，系统启动页一直显示
  }, []);

  // setTimeout(() => {
  //   setAppIsReady(true)
  // }, 0)

  if (!appIsReady) {
    return null;
  } else {
    SplashScreen.hideAsync(); // 系统启动页消失（需要确保需要展示的界面已经准备好）
  }

  return (
    // <View style={styles.container}>
      <MainStackScreen />
    // </View>
    // <RootSiblingParent>
    // <MainStackScreen />
    // </RootSiblingParent>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Button
    //     onPress={() => navigate('LoginScreen')}
    //     title="Learn More"
    //     color="#841584"
    //     accessibilityLabel="Learn more about this purple button"
    //   />
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

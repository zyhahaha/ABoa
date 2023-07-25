import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen'; // 控制启动页的包

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  // const [root, setRoot] = useState();
  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); // 保证项目启动后，系统启动页一直显示
  }, []);

  setTimeout(() => {
    setAppIsReady(true)
  }, 5000)

  if (!appIsReady) {
    return null;
  } else {
    SplashScreen.hideAsync(); // 系统启动页消失（需要确保需要展示的界面已经准备好）
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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

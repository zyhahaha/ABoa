// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Button, View } from 'react-native';
import { navigate } from './RootNavigation'; // 这个是封装的一个工具，用来进行在js代码中的跳转的

// import tabImage from '../img/tab/tabImage';
// import I18n from '../language/index';
// import HomeScreen from '../screen/home/HomeScreen';
// import MinePage from '../screen/mine/Root';
// import VehiclePage from '../screen/vehicle/Root';

// const BottomTabs = createBottomTabNavigator();

export default function BottomTabScreen() {
    return (
        <View>
            <Button
                onPress={() => navigate('LoginScreen')}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => navigate('LoginScreen')}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => navigate('LoginScreen')}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    // <BottomTabs.Navigator
    //   initialRouteName="Vehicle"
    //   screenOptions={({ route }) => ({
    //     tabBarActiveTintColor: '#3C476C',
    //     tabBarIcon: ({ focused }) => {
    //       return <Image source={focused ? tabImage[`${route.name}_active`] : tabImage[route.name]} style={{ width: 24, height: 24 }} />;
    //     },
    //   })}
    // >
    //   <BottomTabs.Screen
    //     name="Vehicle"
    //     component={VehiclePage}
    //     options={{
    //       headerShown: false,
    //       title: I18n.t('menu.MENU_HOME_MY_VEHICLE'),
    //       tabBarLabel: I18n.t('menu.MENU_HOME_MY_VEHICLE'),
    //     }}
    //   />
    //   <BottomTabs.Screen
    //     name="Home"
    //     component={HomeScreen}
    //     options={{
    //       title: I18n.t('menu.MENU_HOME_BATTERY_SWAP'),
    //       tabBarLabel: I18n.t('menu.MENU_HOME_BATTERY_SWAP'),
    //     }}
    //   />
    //   <BottomTabs.Screen
    //     name="MyAccount"
    //     component={MinePage}
    //     options={{
    //       headerShown: false,
    //       title: I18n.t('menu.MENU_HOME_MY_ACCOUNT'),
    //       // tabBarLabel: I18n.t('menu.MENU_HOME_MY_ACCOUNT'),
    //     }}
    //   />
    // </BottomTabs.Navigator>
  );
}

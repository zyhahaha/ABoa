// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import { navigate } from './libs/RootNavigation'; // 这个是封装的一个工具，用来进行在js代码中的跳转的
import { Button } from '@rneui/base';

// import tabImage from '../img/tab/tabImage';
// import I18n from '../language/index';
// import HomeScreen from '../screen/home/HomeScreen';
// import MinePage from '../screen/mine/Root';
// import VehiclePage from '../screen/vehicle/Root';

// const BottomTabs = createBottomTabNavigator();

export default function BottomTabScreen() {
    return (
        <View style={{
            paddingTop: 30
        }}>
            <Button title='Welcome'/>
        </View>
        
        // <View>
        //     <Button
        //         onPress={() => navigate('LoginScreen')}
        //         title="Learn More"
        //         color="#841584"
        //         accessibilityLabel="Learn more about this purple button"
        //     />
        //     <Button
        //         onPress={() => navigate('UserDetails')}
        //         title="UserDetails"
        //         color="#841584"
        //         accessibilityLabel="UserDetails about this purple button"
        //     />
        // </View>
  );
}

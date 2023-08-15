import React from 'react';
import { navigate } from './libs/RootNavigation'; // 这个是封装的一个工具，用来进行在js代码中的跳转的

import Feed from './components/feed'
import HomeTab from './components/home-tab'

export default function BottomTabScreen() {
    return (
        <>
            <Feed />
            <HomeTab />
        </>

        // <Button title='Welcome' />
        // <Icon
        //     type='feather'
        //     name='activity'
        // />
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

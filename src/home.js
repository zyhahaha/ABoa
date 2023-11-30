import React from 'react';
// import { navigate } from './libs/RootNavigation'; // 这个是封装的一个工具，用来进行在js代码中的跳转的

import Feed from './components/feed'
import HomeTab from './components/home-tab'

import { SpeedDial } from '@rneui/themed';

export default function BottomTabScreen() {
    const [index, setIndex] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Feed tabIndex={index} setTabIndex={setIndex} />
            <HomeTab tabIndex={index} setTabIndex={setIndex} />

            <SpeedDial
                isOpen={open}
                icon={{ name: 'edit', color: '#fff' }}
                openIcon={{ name: 'close', color: '#fff' }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}
            >
                <SpeedDial.Action
                    icon={{ type: 'entypo', name: 'bowl', color: '#fff' }}
                    title="吃饭"
                    onPress={() => console.log('Add Something')}
                />
                <SpeedDial.Action
                    icon={{ name: 'delete', color: '#fff' }}
                    title="Delete"
                    onPress={() => console.log('Delete Something')}
                />
            </SpeedDial>
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

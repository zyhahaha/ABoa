import React from 'react';
import { Tab, TabView } from '@rneui/themed';

import Events from './events'
import Growth from './growth'
import Photo from './photo'

export default ({tabIndex, setTabIndex}) => {
    return (
        <>
            {/* <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                    backgroundColor: 'white',
                    height: 3,
                }}
                variant="default"
            >
                <Tab.Item
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
                />
                <Tab.Item
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
                />
                <Tab.Item
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'images', type: 'ionicon', color: 'white' }}
                />
            </Tab> */}

            <TabView value={tabIndex} onChange={setTabIndex} animationType="spring">
                <TabView.Item style={{ backgroundColor: '', width: '100%' }}>
                    <Events />
                </TabView.Item>
                <TabView.Item style={{ backgroundColor: '', width: '100%' }}>
                    <Photo />
                </TabView.Item>
                <TabView.Item style={{ backgroundColor: '', width: '100%' }}>
                    {/* <Growth /> */}
                </TabView.Item>
            </TabView>
        </>
    );
};
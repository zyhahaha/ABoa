import React from 'react';
// import { navigate } from './libs/RootNavigation'; // 这个是封装的一个工具，用来进行在js代码中的跳转的

import Feed from './components/feed'
import HomeTab from './components/home-tab'

import { SpeedDial, Dialog, Input, CheckBox } from '@rneui/themed';
import {
    View
} from 'react-native';
import { Stack } from '@rneui/layout'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function BottomTabScreen() {
    const [index, setIndex] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(true);
    const [checked, setChecked] = React.useState(1);

    const [date, setDate] = React.useState(new Date(1598051730000));
    const [mode, setMode] = React.useState('time');
    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

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
                    onPress={() => {
                        setOpen(false)
                        setModalVisible(true)
                    }}
                />
                <SpeedDial.Action
                    color='#F3C026'
                    icon={{ type: 'font-awesome-5', name: 'poo', color: '#fff' }}
                    title="便便"
                    onPress={() => {
                        setOpen(false)
                    }}
                />
            </SpeedDial>

            <Dialog
                isVisible={modalVisible}
                transparent={true}
                animationType="slide"
                statusBarTranslucent={true}
                onBackdropPress={() => setModalVisible(false)}
            >
                <Dialog.Title title="记录 12.01" />
                <Stack row align="center" spacing={1}>
                    {['今天', '昨天'].map((l, i) => (
                        <CheckBox
                        key={i}
                        title={l}
                        containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={checked === i + 1}
                        onPress={() => setChecked(i + 1)}
                        />
                    ))}
                </Stack>
                <View
                    style={{
                    }}
                >
                    <Input
                        placeholder=' 时间（几点几分）'
                        leftIcon={{ type: 'material-community', name: 'clock-digital' }}
                    />
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        display="spinner"
                        mode={mode}
                        is24Hour={true}
                        onChange={onChange}
                    />
                    <Input
                        placeholder=' 奶量（ml）'
                        leftIcon={{ type: 'material-community', name: 'baby-bottle-outline' }}
                    />
                </View>
                <Dialog.Button
                    title="保 存"
                    onPress={() => {
                        // console.log(`Option ${checked} was selected!`);
                        // toggleDialog5();
                    }}
                />
            </Dialog>
        </>
    );
}

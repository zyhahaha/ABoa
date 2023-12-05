import React from 'react';
// import { navigate } from './libs/RootNavigation'; // 这个是封装的一个工具，用来进行在js代码中的跳转的

import Feed from './components/feed'
import HomeTab from './components/home-tab'

import { SpeedDial, Dialog, Input, CheckBox, Button, Icon } from '@rneui/themed';
import {
    View
} from 'react-native';
import { Stack } from '@rneui/layout'
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import dayjs from 'dayjs';

export default function BottomTabScreen() {
    const [index, setIndex] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(true);
    const [checked, setChecked] = React.useState(1);

    const [date, setDate] = React.useState('');
    // const [mode, setMode] = React.useState('time');
    const [showDatePicker, setShowDatePicker] = React.useState(false);
    
    const onChange = (event, selectedDate) => {
        // const currentDate = selectedDate;
        setShowDatePicker(false);
        // console.log(selectedDate)

        const hours = selectedDate.getHours()
        const minutes = selectedDate.getMinutes()

        if (hours <= 9) hours = '0' + hours
        if (minutes <= 9) minutes = '0' + minutes
        setDate(`${hours}:${minutes}`);
    };

    const [number, onChangeNumber] = React.useState('');

    const [nowDay, setNowDay] = React.useState(dayjs(Date.now()).format('MM.DD'));

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
                <Dialog.Title title={'记录 ' + nowDay} />
                <Stack row align="center" spacing={1}>
                    {['今天', '昨天'].map((l, i) => (
                        <CheckBox
                        key={i}
                        title={l}
                        containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={checked === i + 1}
                        onPress={() => {
                            setChecked(i + 1)
                            if (i === 0) {
                                setNowDay(dayjs(Date.now()).format('MM.DD'))
                            } else if (i === 1) {
                                setNowDay(dayjs(Date.now() - 86400000).format('MM.DD'))
                            }
                        }}
                        />
                    ))}
                </Stack>
                <View
                    style={{
                    }}
                >
                    <Stack row align="center">
                        <Icon
                            name='clock-digital'
                            type='material-community'
                            style={{ marginLeft: 10 }}
                        />
                        <Button
                            title={date ? date : "时间（几点几分）"}
                            type="clear"
                            onPress={() => {
                                setShowDatePicker(true)
                            }}
                        />
                    </Stack>
                    {showDatePicker && (<DateTimePicker
                        testID="dateTimePicker"
                        value={new Date(Date.now())}
                        display="spinner"
                        mode="time"
                        is24Hour={true}
                        onChange={onChange}
                    />)}
                    <Input
                        placeholder=' 奶量（ml）'
                        leftIcon={{ type: 'material-community', name: 'baby-bottle-outline' }}
                        leftIconContainerStyle={{ marginRight: 5 }}
                        inputStyle={{ fontSize: 15 }}
                        onChangeText={onChangeNumber}
                        value={number}
                    />
                </View>
                <Dialog.Button
                    title="保 存"
                    onPress={() => {
                        if (!number || !date) return

                        const paramsDate = dayjs(Date.now() - (checked === 1 ? 0 : 86400000)).format('YYYY-MM-DD')
                        const params = {
                            type: 'bowl',
                            date_time: `${paramsDate} ${date}:00`,
                            value: number
                        }
                        console.log(params)
                        axios.post('http://1.94.7.83:8877/aboa', params).then(res => {
                            console.log(res.data)
                        }).finally(() => {
                            setModalVisible(false)
                            setChecked(1)
                            setDate('')
                            setNowDay(dayjs(Date.now()).format('MM.DD'))
                            onChangeNumber('')
                        })
                    }}
                />
            </Dialog>
        </>
    );
}

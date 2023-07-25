// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Button, Alert } from 'react-native';

export default function BottomTabScreen() {
    return (
        <Button
            onPress={() => Alert.alert('Simple Button pressed')}
            title="Login"
            color="#841584"
            accessibilityLabel="Login label"
        />
  );
}

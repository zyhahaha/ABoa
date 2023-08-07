import React, { Component } from 'react';
import { Text } from '@rneui/themed';
import StepIndicator from 'react-native-step-indicator';

const labels = ["Cart", "Delivery Address", "Order Summary", "Payment Method", "Track", "Track", "Track", "Track"];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
}

export default class Events extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPosition: 3
        }
    }

    onPageChange(position) {
        console.log('xxx', this.setState, position)
        // this.setState({ currentPosition: position++ });
    }

    renderStepIndicatorFn() {
        return (
            <>
                <Text h5></Text>
            </>
        )
    }

    renderLabelFn() {
        return (
            <>
                <Text h5>growth</Text>
            </>
        )
    }

    render() {
        return (
            <StepIndicator
                direction="vertical"
                customStyles={customStyles}
                currentPosition={this.state.currentPosition}
                labels={labels}
                onPress={this.onPageChange}
                renderLabel={this.renderLabelFn}
                renderStepIndicator={this.renderStepIndicatorFn}
            />
        )
    }
}

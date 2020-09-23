import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Animated, Dimensions, Keyboard, TextInput, UIManager } from 'react-native';
import SliderCloser from './SliderCloser';
import common from '../../styles/common';

const { State: TextInputState } = TextInput;

export default class KeyboardShift extends Component {

    state = {
        shift: new Animated.Value(0),
        currentlyFocusedField: null,
    };

    componentDidMount() {
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.currentlyFocusedField && this.state.currentlyFocusedField !== TextInputState.currentlyFocusedInput()) {
            this.showKeyboard(this.state.originalKeyboardHeight);
        }
        return true;
    }

    handleKeyboardDidShow = (event) => {
        const keyboardHeight = event.endCoordinates.height;
        this.showKeyboard(keyboardHeight);
    };

    showKeyboard = (keyboardHeight) => {
        const { shift } = this.state;

        const { height: windowHeight } = Dimensions.get('window');
        const currentlyFocusedField = TextInputState.currentlyFocusedInput();
        if (currentlyFocusedField) {
            currentlyFocusedField.measure ((originX, originY, width, height, pageX, pageY) => {
                const fieldHeight = height;
                const fieldTop = pageY;
                const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight) - 5 - (this.props.buffer ? this.props.buffer : 0);

                if (gap >= 0) {
                    return;
                }
                Animated.timing(
                    shift,
                    {
                        toValue: gap,
                        duration: 500,
                        useNativeDriver: true,
                    }
                ).start(() => this.setState({ currentlyFocusedField, originalKeyboardHeight: keyboardHeight }));
            });
        }
    };

    handleKeyboardDidHide = () => {
        const { shift } = this.state;
        Animated.timing(shift, { toValue: 0, duration: 500, useNativeDriver: true }).start();
    };

    render() {
        const { children: renderProp, isLogin, onClose } = this.props;
        const { shift } = this.state;
        return (
            <Animated.View style={[common.sliderContainer, { transform: [{ translateY: shift }] }]}>
                <SliderCloser isLogin={isLogin} onClose={onClose}/>
                {renderProp()}
            </Animated.View>
        );
    }
}

KeyboardShift.propTypes = {
    children: PropTypes.func.isRequired,
    activeComponent: PropTypes.number
};

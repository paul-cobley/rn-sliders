import React, { Component } from 'react';
import { Animated, Keyboard, Text, View } from 'react-native';
import AvoidingSlider from '../sliders/AvoidingSlider';
import { DarkButton, RedButton } from '../buttons';
import fonts from '../../styles/fonts';
import common from '../../styles/common';
import { FormInput } from '../common';

export const ICON = require('../../../assets/slider.jpg');

const SMALL_HEIGHT = 50;
const LARGE_HEIGHT = 200;

const ref1 = React.createRef();
const ref2 = React.createRef();

class AnimatedInputs extends Component {

    constructor(props) {
        super(props);
        this.keyboardHeight = new Animated.Value(0);
        this.dim = new Animated.Value(LARGE_HEIGHT);
    }

    componentDidMount() {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }

    keyboardWillShow = (event) => {
        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                duration: event.duration,
                toValue: event.endCoordinates.height,
                useNativeDriver: false
            }),
            Animated.timing(this.dim, {
                duration: event.duration,
                toValue: SMALL_HEIGHT,
                useNativeDriver: false
            }),
        ]).start();
    };

    keyboardWillHide = (event) => {
        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                duration: event.duration,
                toValue: 0,
                useNativeDriver: false
            }),
            Animated.timing(this.dim, {
                duration: event.duration,
                toValue: LARGE_HEIGHT,
                useNativeDriver: false
            }),
        ]).start();
    };

    render() {
        const { visible, onClose } = this.props;

        return (
            <AvoidingSlider visible={visible} title='Animations' onClose={onClose} buttons={[
                <DarkButton key='1' label='Save' onPress={onClose}/>,
                <RedButton key='2' label='Cancel' onPress={() => Keyboard.dismiss()}/>,
            ]}>
                <View style={common.centerContainer}>
                    <View style={common.vPaddedContainer}>
                        <Animated.Image style={[common.imageStyle, { width: this.dim, height: this.dim}]} source={ICON}/>
                    </View>
                </View>
                <View style={common.vPaddedContainer}>
                    <Text style={fonts.subText}>When the keyboard shows the image gets smaller to make space</Text>
                </View>

                <Text style={fonts.formText}>Name</Text>
                <FormInput ref={ref1}
                           placeholder='Paul'
                           onSubmit={() => ref2.current.focus() }
                           blurOnSubmit={false}/>

                <Text style={fonts.formText}>Surname</Text>
                <FormInput ref={ref2}
                           placeholder='Go get it...'
                           onSubmit={() => Keyboard.dismiss()}
                           blurOnSubmit={true}/>

            </AvoidingSlider>
        );
    }
}

export default AnimatedInputs;

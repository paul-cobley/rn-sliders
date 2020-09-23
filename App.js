import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import common from './src/styles/common';
import fonts from './src/styles/fonts';
import { Button } from './src/components/buttons';
import { FancyInputs, NextInputs, AnimatedInputs } from './src/components/forms';

export const ICON = require('./assets/slider.jpg');

export default function App() {

    const [slider1Visible, showSlider1] = useState(false);
    const [slider2Visible, showSlider2] = useState(false);
    const [slider3Visible, showSlider3] = useState(false);

    return (
        <View style={common.mainContainer}>

            <View style={common.paddedContainer}>
                <View style={common.centerContainer}>
                    <View style={common.vPaddedContainer}>
                        <Avatar size='xlarge' avatarStyle={{ borderRadius: 100 }} source={ICON} activeOpacity={0.7}/>
                    </View>
                    <View style={common.vPaddedContainer}>
                        <View style={common.centerContainer}>
                            <Text style={fonts.titleTxt}>Welcome to the slider input demo</Text>
                            <Text style={fonts.subText}>by Paul Cobley</Text>
                        </View>
                    </View>
                </View>

                <View style={common.vPaddedContainer}>
                    <Button label='Fancy Inputs' onPress={() => showSlider1(true)}/>
                    <Button label='Next Inputs' onPress={() => showSlider2(true)}/>
                    <Button label='Animations' onPress={() => showSlider3(true)}/>
                </View>
            </View>

            <FancyInputs visible={slider1Visible} onClose={() => showSlider1(false)}/>
            <NextInputs visible={slider2Visible} onClose={() => showSlider2(false)}/>
            <AnimatedInputs visible={slider3Visible} onClose={() => showSlider3(false)}/>
        </View>
    );
}

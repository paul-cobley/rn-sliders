import React from 'react';
import InputSlider from './InputSlider';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import KeyboardShift from './KeyboardShift';
import common from '../../styles/common';
import SliderHeader from './SliderHeader';
import Divider from '../Divider';
import SliderCloser from './SliderCloser';

const AvoidingSlider = ({ visible, onClose, title, icon, buttons, children, showDivider = true }) => {

    return (
        <InputSlider modalVisible={visible}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>

                <SliderCloser onClose={onClose}/>

                <View style={common.modalContainer}>

                    <SliderHeader title={ title }>
                        { icon }
                    </SliderHeader>

                    { showDivider ? <Divider/> : null }

                    <View style={common.paddedContainer}>
                        { children }

                        <View style={common.vPaddedContainer}>
                            { buttons }
                        </View>

                    </View>
                </View>
            </KeyboardAvoidingView>
        </InputSlider>
    );
};

export default AvoidingSlider;

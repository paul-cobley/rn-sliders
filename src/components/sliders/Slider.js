import React from 'react';
import InputSlider from './InputSlider';
import { View } from 'react-native';
import KeyboardShift from './KeyboardShift';
import common from '../../styles/common';
import SliderHeader from './SliderHeader';
import Divider from '../Divider';

const Slider = ({ visible, onClose, title, icon, buttons, children, showDivider = true, buffer = 0 }) => {

    return (
        <InputSlider modalVisible={visible}>
            <KeyboardShift buffer={buffer} onClose={onClose}>{() => (
                <View style={common.container}>

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
            )}
            </KeyboardShift>
        </InputSlider>
    );
};

export default Slider;

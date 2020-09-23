import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import common from '../../styles/common';

export default function SliderCloser({ onClose, isLogin = false }) {
    return (
        <View style={isLogin ? common.darkContainer : common.lightContainer}>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={common.touchContainer}>
                    <View style={ common.closeContainer }/>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

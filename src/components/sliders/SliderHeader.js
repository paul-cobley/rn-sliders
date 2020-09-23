import React from 'react';
import { Text, View } from 'react-native';
import common from '../../styles/common';
import fonts from '../../styles/fonts';

const SliderHeader = ({ title, children }) => {

    const renderContent = () => {
           if (title) {
               return (
                   <View style={common.vPaddedContainer}>
                       <Text style={fonts.modalHeaderText}>{title}</Text>
                   </View>
               );
           }
           if (children) {
               return (
                   <View style={common.sliderIconContainer}>
                       { children }
                   </View>
               );
           }
    };

    return (
        <View style={common.sliderHeaderContainer}>
            { renderContent() }
        </View>

    );
};

export default SliderHeader;

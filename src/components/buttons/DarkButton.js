import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import buttons from '../../styles/buttons';

const Button = ({ label, onPress, icon, disabled = false, spaceLeft = 0, spaceRight = 0 }) => {

    if (!disabled) {
        return (
            <TouchableOpacity style={[buttons.darkButton, { marginLeft: spaceLeft, marginRight: spaceRight }]} onPress={onPress}>
                <Text style={buttons.darkText}>{label} </Text>
                {icon}
            </TouchableOpacity>
        );
    }

    return (
        <View style={[buttons.button, { marginLeft: spaceLeft, marginRight: spaceRight }]} onPress={onPress}>
            <Text style={buttons.text}>{label} </Text>
            {icon}
        </View>
    );
};

export default Button;

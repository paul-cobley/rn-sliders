import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import buttons from '../../styles/buttons';

const Button = ({ label, icon, onPress, spaceLeft = 0, spaceRight = 0 }) => {
    return (
        <TouchableOpacity style={[buttons.button, { marginLeft: spaceLeft, marginRight: spaceRight }]} onPress={onPress}>
            <Text style={buttons.text}>{ label }</Text>
            { icon }
        </TouchableOpacity>
    );
};

export default Button;

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import buttons from '../../styles/buttons';

const RedButton = ({ label, onPress, icon, fill = false, spaceLeft = 0, spaceRight = 0 }) => {
    return (
        <TouchableOpacity style={[fill ? buttons.stretchedRedButton : buttons.redButton,
            { marginLeft: spaceLeft, marginRight: spaceRight }]} onPress={onPress}>
            <Text style={buttons.darkText}>{ label } </Text>
            { icon }
        </TouchableOpacity>
    );
};

export default RedButton;

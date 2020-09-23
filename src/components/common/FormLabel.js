import React from 'react';
import fonts from '../../styles/fonts';
import { Text } from 'react-native';

const FormLabel = ({ label }) => {
    return (
        <Text style={fonts.formText}>{ label }</Text>
    );
};

export default FormLabel;

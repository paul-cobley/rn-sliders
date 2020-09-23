import React from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as colors from '../styles/colors';
import fonts from '../styles/fonts';
import common from '../styles/common';
import { Ionicons } from '@expo/vector-icons';

const FancyInput = ({ ref, type = 'default', value, disabled = false, secureTextEntry = false, onChange, onSave, label, onButtonPress}) => {

    const renderLabel = () => {
        if (onButtonPress) {
            return (
                <TouchableOpacity style={{ justifyContent: 'center' }} onPress={onButtonPress}>
                    <Text style={fonts.inputLabelChange}>Change</Text>
                </TouchableOpacity>
            );
        }
        if (label === 'Requested') {
            return <ActivityIndicator size='small' color={colors.fontSecondary}/>
        } else if (label === 'Error') {
            return <Text style={fonts.inputLabelError}>{label}</Text>
        } else if (label === 'Updated') {
            return (
                <View style={common.rowContainer}>
                    <Text style={fonts.inputLabelUpdated}>Updated  </Text>
                    <Ionicons name="ios-checkmark-circle-outline" size={18} color={colors.success} />
                </View>
            );
        }

        return null;
    };

    return (
        <View style={common.formInputRow}>
            <TextInput
                ref={ref}
                editable={!disabled}
                secureTextEntry={secureTextEntry}
                keyboardType={type}
                returnKeyType='done'
                style={{ flex: 1}}
                value={value}
                onChangeText={onChange}
                onSubmitEditing={onSave}
            />
            { renderLabel() }
        </View>
    );
};

export default FancyInput;

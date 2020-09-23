import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Slider from '../sliders/Slider';
import { DarkButton } from '../buttons';
import { Text, View } from 'react-native';
import { FormLabel } from '../common';
import FancyInput from '../FancyInput';
import common from '../../styles/common';
import fonts from '../../styles/fonts';
import * as colors from '../../styles/colors';

const FancyInputs = ({ visible, onClose}) => {

    return (
        <Slider visible={visible} showDivider={false} onClose={onClose} buffer={10}
                icon={<Ionicons name="ios-checkmark-circle" size={30} color={colors.success} />}
                buttons={[ <DarkButton key='1' label='Save' onPress={onClose}/> ]}>

            <View style={common.vPaddedContainer}>
                <Text style={fonts.subText}>Fields show different labels based upon state</Text>
            </View>

            <FormLabel label='Name'/>
            <FancyInput/>

            <FormLabel label='Updating'/>
            <FancyInput label='Requested'/>

            <FormLabel label='Success'/>
            <FancyInput label='Updated'/>

            <FormLabel label='Error'/>
            <FancyInput label='Error'/>
        </Slider>
    );
};

export default FancyInputs;

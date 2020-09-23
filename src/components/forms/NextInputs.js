import React, { useRef, useState } from 'react';
import { Keyboard, Text, View } from 'react-native';
import Slider from '../sliders/Slider';
import { DarkButton } from '../buttons';
import { FormLabel, FormInput } from '../common';
import fonts from '../../styles/fonts';
import common from '../../styles/common';

const FancyInputs = ({ visible, onClose}) => {

    // Just used to trigger a state change so the scroller kicks in
    const [activeComponent, setActiveComponent] = useState(1);

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();

    return (
        <Slider activeComponent={activeComponent} visible={visible} title='Next Inputs' onClose={onClose} buffer={10} buttons={[
            <DarkButton key='1' label='Save' onPress={onClose}/>
        ]}>
            <View style={common.vPaddedContainer}>
                <Text style={fonts.subText}>Fill in the fields in order using the Next button</Text>
            </View>

            <FormLabel label='Name'/>
            <FormInput ref={ref1}
                       placeholder='Paul'
                       onSubmit={() => ref2.current.focus() }
                       blurOnSubmit={false}
                       onFocus={() => setActiveComponent(1)}/>

            <FormLabel label='Surname'/>
            <FormInput ref={ref2}
                       placeholder='Cobley'
                       onSubmit={() => ref3.current.focus() }
                       blurOnSubmit={false}
                       onFocus={() => setActiveComponent(2)}/>

            <FormLabel label='Tagline'/>
            <FormInput ref={ref3}
                       placeholder='Go get it...'
                       onSubmit={() => Keyboard.dismiss()}
                       blurOnSubmit={true}
                       onFocus={() => setActiveComponent(3)}
            />
        </Slider>
    );
};

export default FancyInputs;

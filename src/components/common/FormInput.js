import React, { forwardRef } from 'react';
import common from '../../styles/common';
import { TextInput } from 'react-native';

const FormInput = forwardRef(({ placeholder, returnKeyType = 'next', onSubmit, blurOnSubmit, onFocus }, ref) => {
    return (
        <TextInput
            ref={ref}
            style={common.formInput}
            placeholder={placeholder}
            autoCorrect={false}
            autoCapitalize='none'
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmit}
            blurOnSubmit={blurOnSubmit}
            onFocus={onFocus}
        />
    );
});

export default FormInput;

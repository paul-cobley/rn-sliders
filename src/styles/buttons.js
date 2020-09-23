import { StyleSheet } from 'react-native';
import * as colors from './colors';
import { largeBold } from './fonts';

const btn = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bgLight,
    borderColor: colors.fontLight,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 2,
};

const btnText = {
    ...largeBold,
    color: colors.fontSecondary,
    paddingHorizontal: 5,
};

const buttons = StyleSheet.create({
    button: {
        ...btn,
    },
    darkButton: {
        ...btn,
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
    redButton: {
        ...btn,
        backgroundColor: colors.bgRed,
        borderColor: colors.bgRed,
    },
    successButton: {
        ...btn,
        backgroundColor: colors.success,
        borderColor: colors.success,
    },
    lightButton: {
        ...btn,
        backgroundColor: colors.bgBlue,
        borderColor: colors.bgBlue,
    },
    text: {
        ...btnText,
        color: colors.primary,
    },
    primaryText: {
        ...btnText,
        color: colors.primary,
    },
    darkText: {
        ...btnText,
        color: colors.fontLight,
    },
    availableText: {
        ...btnText,
        color: colors.success,
    },
    bookedText: {
        ...btnText,
        color: colors.primary,
    },
});

export default buttons;

import { StyleSheet } from 'react-native';
import * as colors from './colors';

export const small = {
    fontSize: 12,
};

export const medium = {
    fontSize: 16,
};

export const large = {
    fontSize: 20,
};

export const bold = {
    fontWeight: 'bold',
};

export const smallBold = {
    ...bold,
    ...small,
};

export const mediumBold = {
    ...bold,
    ...medium,
};

export const largeBold = {
    ...bold,
    ...large,
};

const fonts = StyleSheet.create({
    titleTxt: {
        ...largeBold,
        color: colors.fontLight,
    },
    btnText: {
        ...mediumBold,
    },
    formText: {
        ...medium,
        color: colors.fontLight,
    },
    subText: {
        ...small,
        color: colors.fontLight,
    },
    modalHeaderText: {
        ...largeBold,
        color: colors.fontLight,
    },
    inputLabelChange: {
        ...smallBold,
        color: colors.primary,
    },
    inputLabelError: {
        ...smallBold,
        color: colors.error,
    },
    inputLabelUpdated: {
        ...smallBold,
        color: colors.success,
    },
});

export default fonts;

import { StyleSheet } from 'react-native';
import * as colors from './colors';

const input = {
    marginTop: 5,
    marginBottom: 10,
    height: 40,
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: colors.fontLight,
    borderRadius: 5,
    padding: 10,
};

const common = StyleSheet.create({
    mainContainer: {
        ...StyleSheet.absoluteFill,
        backgroundColor: colors.primary,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    divider: {
        height: 1,
        borderBottomWidth: 0.2,
        borderBottomColor: colors.bgLight,
    },
    centerContainer: {
        alignItems: 'center',
    },
    modalWrapper: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: colors.secondary,
        padding: 0,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    lightContainer: {
        backgroundColor: colors.primary,
    },
    darkContainer: {
        backgroundColor: colors.primary,
    },
    touchContainer: {
        height: 30,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeContainer: {
        height: 8,
        width: 120,
        marginTop: 5,
        backgroundColor: colors.fontSecondary,
        borderRadius: 5,
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bgLight,
        borderColor: colors.fontLight,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 2,
    },
    sliderIconContainer: {
        backgroundColor: colors.bgBlue,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        marginTop: 20,
    },
    sliderHeaderContainer: {
        alignItems: 'center',
        backgroundColor: colors.secondary,
    },
    sliderContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        left: 0,
        position: 'absolute',
        width: '100%',
        paddingBottom: 500, // Make the screen taller so we dont see the underlying screen
        bottom: -500, // Make the screen taller so we dont see the underlying screen
        backgroundColor: colors.secondary,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paddedContainer: {
        padding: 20,
    },
    vPaddedContainer: {
        paddingVertical: 10,
    },
    hPaddedContainer: {
        paddingHorizontal: 20,
    },
    formInput: {
        ...input,
    },
    formInputRow: {
        ...input,
        flexDirection: 'row',
        backgroundColor: colors.fontLight,
        borderColor: colors.primary,
        color: colors.font,
    },
    imageStyle: {
        borderRadius: 100,
    },
});

export default common;

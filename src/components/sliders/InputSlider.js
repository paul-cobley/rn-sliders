import * as React from 'react';
import { Modal, View } from 'react-native';
import common from '../../styles/common';

export default function InputSlider(props) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={common.modalWrapper}>
                { props.children }
            </View>
        </Modal>
    );
};

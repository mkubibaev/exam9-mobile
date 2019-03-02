import React from 'react';
import {Modal, View, Text, Button, Image} from 'react-native';
import styles from '../../../styles';

const ContactInfo = props => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.show}
            onRequestClose={props.close}
        >
            <View style={styles.modal}>

                {/*данные модалки почему то грузятся до его вызова*/}
                {props.contact
                    ? <View style={styles.modalContact}>
                        <Image style={styles.modalImg} source={{uri: props.contact.photo}}/>
                        <Text style={styles.modalContactText}>{props.contact.name}</Text>
                        <Text style={styles.modalContactText}>{props.contact.phone}</Text>
                        <Text style={styles.modalContactText}>{props.contact.email}</Text>
                    </View>

                    : null
                }

                <Button onPress={props.close} title="Back to list"/>
            </View>

        </Modal>
    );
};

export default ContactInfo;

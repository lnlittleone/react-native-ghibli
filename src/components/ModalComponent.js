import React, { useState} from "react";
import {Modal, View, StyleSheet} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import FlatButton from "../shared/Button";

export default function ModalComponent(props){
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <View>
            <Modal visible={modalOpen} animationType="slide">
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name="close"
                        size={24}
                        onPress={()=>setModalOpen(false)}
                    />
                    {props.children}
                </View>
            </Modal>

            <FlatButton
                text={props.title}
                onPress={()=>setModalOpen(true)}
            />
        </View>
)}

const styles = StyleSheet.create({
    modalContent:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
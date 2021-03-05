import React, { useState} from "react";
import {Button, Image, Modal, Text, View, StyleSheet} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {globalStyles} from "../../styles/global";

export default function ModalComponent(){
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
                    <Text style={globalStyles.text}>Here's some good luuuuuv !</Text>
                    <Image source={require('../../assets/images/toto-logo.png')} style={styles.modalImage}/>
                </View>
            </Modal>

            <Button
                title="Want some love ?"
                onPress={()=>setModalOpen(true)}
                color="maroon"
            />
        </View>
)}

const styles = StyleSheet.create({
    modalContent:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalImage:{
        width:300,
        height:400,
    }
})
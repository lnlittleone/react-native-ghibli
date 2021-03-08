import React, { useState } from 'react';
import {StyleSheet, Text, View, FlatList, Image, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {globalStyles} from "../../styles/global";
import ReviewForm from "./ReviewForm";
import VerticalCard from "../shared/VerticalCard";
import ModalComponent from "./ModalComponent";

export const About = () => {

    const [reviews, setReviews] = useState([
        {name: 'Sen', comment : 'Love Ghibli movies. thxxxx for the app <3', rating: 5, key:1},
    ])

    const addReview = (review) => {
        review.key = Date.now().toString()
        setReviews((currentReviews) => [review, ...currentReviews])
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About Ghibli App</Text>
            <Text style={globalStyles.text}>This app is a discovery of React native development. All the data retrieved for the needs of this app are from the Ghibli API.</Text>

            <ModalComponent title="Leave a comment">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
                    <View style={globalStyles.container}>
                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
            </ModalComponent>

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <VerticalCard>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={globalStyles.text}>{item.comment}</Text>
                        <Image source={require('../../assets/images/toto-love.png')} style={styles.image}/>
                    </VerticalCard> )}
                keyExtractor={item => item.key} />
        </View>
    )
}

const styles = StyleSheet.create({
    name:{
        fontSize:20,
        color: '#7BA036',
    },
    image:{
        width:35,
        height:45
    }
})
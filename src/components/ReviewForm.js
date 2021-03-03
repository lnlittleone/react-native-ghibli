import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {globalStyles} from "../../styles/global";
import { Formik } from 'formik'
import * as yup from 'yup'
import FlatButton from "../shared/Button";

const reviewSchema = yup.object({
    name: yup.string().required().min(3),
    comment: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1 - 5', (val)=>{
        return parseInt(val) < 6 && parseInt(val) > 0
    })
})

export default function ReviewForm({addReview}){

    return (
        <View style={styles.form}>
            <Formik
                initialValues={{
                    name: '',
                    comment:'',
                    rating:0
                }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions)=>{
                    actions.resetForm()
                    addReview(values)
                }}>
                {(props)=>(
                   <View style={styles.form}>
                       <TextInput
                           style={globalStyles.input}
                           placeholder='Your name'
                           onChangeText={props.handleChange('name')}
                           value={props.values.name}
                           onBlur={props.handleBlur('name')}
                       />
                       <Text style={globalStyles.error}>{props.touched.name && props.errors.name}</Text>

                       <TextInput
                           multiline
                           minHeight={60}
                           style={globalStyles.input}
                           placeholder='Your comment'
                           onChangeText={props.handleChange('comment')}
                           value={props.values.comment}
                           onBlur={props.handleBlur('comment')}
                       />
                       <Text style={globalStyles.error}>{props.touched.comment && props.errors.comment}</Text>

                       <TextInput
                           style={globalStyles.input}
                           placeholder='Rating 1-5'
                           onChangeText={props.handleChange('rating')}
                           value={props.values.rating}
                           keyboardType="numeric"
                           onBlur={props.handleBlur('rating')}
                       />
                       <Text style={globalStyles.error}>{props.touched.rating && props.errors.rating}</Text>

                       <FlatButton
                           text="Submit"
                           onPress={props.handleSubmit}
                        />
                   </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        flex:1,
        backgroundColor:'#fff',
        margin: 10
    },
})
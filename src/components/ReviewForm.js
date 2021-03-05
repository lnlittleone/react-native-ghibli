import React from 'react';
import { View, TextInput, Button} from 'react-native';
import {globalStyles} from "../../styles/global";
import { Formik } from 'formik'

export default function ReviewForm({addReview}){

    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    name: '',
                    comment:'',
                    rating:0
                }}
                onSubmit={(values, actions)=>{
                    actions.resetForm()
                    addReview(values)
                }}>
                {(props)=>(
                   <View>
                       <TextInput
                           style={globalStyles.input}
                           placeholder='Your name'
                           onChangeText={props.handleChange('name')}
                           value={props.values.name}
                       />
                       <TextInput
                           multiline
                           style={globalStyles.input}
                           placeholder='Your comment'
                           onChangeText={props.handleChange('comment')}
                           value={props.values.comment}
                       />
                       <TextInput
                           style={globalStyles.input}
                           placeholder='Rating 1-5'
                           onChangeText={props.handleChange('rating')}
                           value={props.values.rating}
                           keyboardType="numeric"
                       />
                       <Button
                           title="Submit"
                           color="maroon"
                           onPress={props.handleSubmit}
                        />
                   </View>
                )}

            </Formik>
        </View>
    )
}

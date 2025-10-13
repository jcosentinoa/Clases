import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function Card(props) {
    return (
        <View>
            <Text>title: {props.title}</Text>
            <Text>price: {props.price}</Text>
            <Text>description: {props.description}</Text>
            <Text>category: {props.category}</Text>
            <Image style={styles.image} 
              source={{uri: props.image}}
              resizeMode='contain'/>
        </View>
    
    )
}
const styles= StyleSheet.create({
    image: {
        height: 300,
        width: 400
      }
})
export default Card;
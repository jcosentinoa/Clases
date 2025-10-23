import React, { Component } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

class Profile extends Component {
    constructor(props) {
        super(props);
           this.state = {
            
           }
      }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Profile</Text>
                <Pressable onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.botonA}>Desloguearse </Text>
                </Pressable>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 20
    },
    titulo: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 10
    },
    botonA:{
        backgroundColor: "#FFE880",
        borderRadius: 5,
        paddingHorizontal: 25,
        paddingVertical: 15,
        margin: 10
    }

});

export default Profile;
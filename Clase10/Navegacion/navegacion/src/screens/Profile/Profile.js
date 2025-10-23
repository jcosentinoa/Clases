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
                <Pressable style={styles.botonA} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.texto}>Desloguearse </Text>
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
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 6,
        margin: 10
    },
    texto: {
        color: "#fff"
    }

});

export default Profile;
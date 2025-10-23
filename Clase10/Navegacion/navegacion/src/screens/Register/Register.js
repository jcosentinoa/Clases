import React, { Component } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

class Register extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Register</Text>
                <Pressable onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.boton}>Ir a Login</Text>
                </Pressable>

            </View >

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
    boton:{
        backgroundColor: "rgb(135, 206, 235)",
        borderRadius: 5,
        paddingHorizontal: 25,
        paddingVertical: 10,
        margin: 10
    }
});

export default Register;
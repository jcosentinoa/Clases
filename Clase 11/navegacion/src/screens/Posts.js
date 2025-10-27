import React, { Component } from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { db } from "../../firebase/config";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            mensaje: ""
        }
    }
    onSubmit(email, mensaje) {
        db.collection('posts').add({
            email: email,
            mensaje: mensaje,
            createdAt: Date.now(),
        })
            .then()
            .catch(e => console.log(e))

    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Post!</Text>

                <TextInput style={styles.input}
                    keyboardType='email-address'
                    placeholder='email'
                    onChangeText={text => this.setState({ email: text })}
                    value={this.state.email} />

                <TextInput style={styles.input}
                    keyboardType='default'
                    placeholder='mensaje'
                    onChangeText={text => this.setState({ mensaje: text })}
                    value={this.state.mensaje} />


                <Pressable style={styles.boton} onPress={() => this.onSubmit(this.state.email, this.state.mensaje)}>
                    <Text style={styles.texto}> Guardar mensaje </Text>
                </Pressable>

                <Pressable style={styles.botonA} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.texto}>Ir a Login</Text>
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
        paddingHorizontal: 10,
        margenTop: 20
    },
    input: {
        height: 20,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        borderCurve: 6,
        marginVertical: 10,
        borderStyle: "solid"
    },
    titulo: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 10
    },
    boton: {
        backgroundColor: "#28a745",
        borderRadius: 4,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#28a745",
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: "center"
    },
    texto: {
        color: "#fff"
    },
    botonA: {
        backgroundColor: "#FFE880",
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 6,
        margin: 10
    }
});

export default Posts;
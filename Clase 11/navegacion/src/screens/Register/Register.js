import React, { Component } from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { auth } from "../../firebase/config";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            userName: "",
            password: ""
        }
    }
    onSubmit(email, password) {
        console.log(this.state);
        
        auth.createUserWithEmailAndPassword(email, password)
            .then(response => {
                console.log(response);
                this.props.navigation.navigate('Login')
            })
            .catch(error => {
                console.log(error);
                
            })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Register</Text>

                <TextInput style={styles.input}
                    keyboardType='email-address'
                    placeholder='email'
                    onChangeText={text => this.setState({ email: text })}
                    value={this.state.email} />

                <TextInput style={styles.input}
                    keyboardType='default'
                    placeholder='userName'
                    onChangeText={text => this.setState({ userName: text })}
                    value={this.state.userName} />

                <TextInput style={styles.input}
                    keyboardType='default'
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={text => this.setState({ password: text })}
                    value={this.state.password} />

                <Pressable style={styles.boton} onPress={() => this.onSubmit(this.state.email, this.state.password)}>
                    <Text style={styles.texto}> Registrate </Text>
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

export default Register;
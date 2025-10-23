import React, { Component } from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    onSubmit() {
        console.log(this.state);
        this.props.navigation.navigate('Login')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Ingresar</Text>

                <TextInput style={styles.input}
                    keyboardType='email-address'
                    placeholder='email'
                    onChangeText={text => this.setState({ email: text })}
                    value={this.state.email} />


                <TextInput style={styles.input}
                    keyboardType='default'
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={text => this.setState({ password: text })}
                    value={this.state.password} />

                <Pressable style={styles.boton} onPress={() => this.onSubmit()}>
                    <Text style={styles.texto}> ingresá </Text>
                </Pressable>

                <Pressable style={styles.botonB} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.texto}>Ir a register </Text>
                </Pressable>

                <Pressable style={styles.botonA} onPress={() => this.props.navigation.navigate('HomeMenu')}>
                    <Text style={styles.texto}>Entrar en la app</Text>
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
    botonB: {
        backgroundColor: "rgb(135, 206, 235)",
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 6,
        margin: 10
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
    botonA: {
        backgroundColor: "#FFE880",
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 6,
        margin: 10
    },
    texto: {
        color: "#fff"
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
    }

});

export default Login;
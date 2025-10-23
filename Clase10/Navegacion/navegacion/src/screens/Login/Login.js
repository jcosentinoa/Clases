import React, { Component } from "react";
import { StyleSheet, Text, View, Pressable} from "react-native";


class Login extends Component {
    constructor(props) {
        super(props);
           this.state = {
           
        }
      
      }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Ingresar</Text>
                <Pressable onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.botonB}>Ir a register </Text>
                </Pressable>
                <Pressable onPress={() => this.props.navigation.navigate('HomeMenu')}>
                    <Text style={styles.botonA}>Entrar en la app</Text>
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
    botonB:{
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
    botonA:{
        backgroundColor: "#FFE880",
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 6,
        margin: 10
    }

});

export default Login;
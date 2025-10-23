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
                    <Text style={styles.boton}>Ir a register </Text>
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
    boton:{
        backgroundColor: "rgb(135, 206, 235)",
        borderRadius: 5,
        paddingHorizontal: 40,
        paddingVertical: 15,
        margin: 10
    },
    botonA:{
        backgroundColor: "#FFE880",
        borderRadius: 5,
        paddingHorizontal: 25,
        paddingVertical: 15,
        margin: 10
    }

});

export default Login;
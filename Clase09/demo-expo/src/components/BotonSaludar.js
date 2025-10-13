import React, {Component} from "react";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native-web";

class BotonSaludar extends Component {
    saludar (){
        console.log("estoy saludando")
    }
    render ( ) {
        return(
            
            <Pressable onPress={()=> this.saludar()} style={styles.boton} >
                <Text style={styles.texto}>Saludar</Text>
            </Pressable>
        )
    }
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: "red",
        padding: 7
    },
    texto: {
        color: "white",
        fontWeight: "bold"
    } 
})

export default BotonSaludar;
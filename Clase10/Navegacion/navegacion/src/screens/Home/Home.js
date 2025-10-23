import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native-web";


class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>HOME</Text>
                <Text>Bienvenido!</Text>
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
    }
});

export default Home;
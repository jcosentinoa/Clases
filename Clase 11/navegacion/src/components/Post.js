import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Post extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data
        return(
            <View style={styles.container} >
                <Text style={styles.email}>{data.email}</Text>
                <Text style={styles.mensaje}>{data.mensaje}</Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: "#D3D3D3",
        padding: 10
    },
    mensaje: {
        fontSize: 15,
        marginBottom: 10
    },
    email: {
        fontSize: 15,
        fontWeight: "bold"
    }

});

export default Post;
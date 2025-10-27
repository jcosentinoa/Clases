import React, { Component } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FlatList } from "react-native-web";
import { db } from "../../firebase/config";

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: []
        }
    }

    componentDidMount() {
        db.collection('users').onSnapshot(
            docs => {
                let usuario = [];
                docs.forEach(doc => {
                    usuario.push({
                        id: doc.id,
                        data: doc.data()
                    })
                    this.setState({
                        usuarios: usuario
                    })
                })
            })
        
        
    }



    render() {
        console.log(this.state.usuarios);
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Usuarios</Text>

                <FlatList
                    data={this.state.usuarios}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <Text>{item.data.email}</Text>}
                />


                <Pressable style={styles.botonA} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.texto}>Ir a Login </Text>
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
    botonA: {
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

export default Usuarios;
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import DynamicForm from "../../components/DynamicForm/DynamicForm";
import { FlatList } from "react-native-web";
import { db } from "../../firebase/config";

import Post from "../../components/Post";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        db.collection('posts').onSnapshot(
            docs => {
                let posteos = [];
                docs.forEach(doc => {
                    posteos.push({
                        id: doc.id,
                        data: doc.data()
                    })
                    this.setState({
                        posts: posteos
                    })
                })
            })


    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>HOME</Text>
                <Text>Posts:</Text>
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) =>
                        <Post email={item.data.email}
                            mensaje={item.data.mensaje}
                            createdAt={item.data.createdAt}
                        />}
                />


                <DynamicForm />
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
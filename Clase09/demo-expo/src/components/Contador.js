import React, { Component } from "react";
import { Text, View, Pressable } from "react-native-web";

class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
          contador: 0
        };
      }
    click (){
        this.setState(
            {
                contador: this.state.contador + 1
            }
        )
    }
    render(){
        return(
            <View>
                <Text>Cantidad de clicks: {this.state.contador}  </Text>
                <Pressable onPress={()=> this.click()} >
                    <Text>Click aquí para contar</Text>
                </Pressable>
            </View>
            
        )
    }
    
}

export default Contador;
import  React  from "react";
import { Text, View } from "react-native-web";
import BotonSaludar from "../components/BotonSaludar";
import Contador from "../components/Contador";
import { StyleSheet } from "react-native";

function Home(params) {
    return(
        <View style={styles.principal}>
            <Text>Hola mundo</Text>
            <BotonSaludar/>
            <Contador/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    principal: {
        alignItems: "center",
        padding: 10,
        textAlign: "center"
    }
    
})

export default Home;
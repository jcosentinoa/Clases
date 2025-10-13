import  React  from "react";
import { Text, View } from "react-native-web";
import BotonSaludar from "../components/BotonSaludar";

function Home(params) {
    return(
        <View>
            <Text>Hola mundo</Text>
            <BotonSaludar/>
        </View>
        
    )
}

export default Home;
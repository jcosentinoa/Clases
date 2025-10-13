import  React  from "react";
import { Text, View } from "react-native-web";
import BotonSaludar from "../components/BotonSaludar";
import Contador from "../components/Contador";

function Home(params) {
    return(
        <View>
            <Text>Hola mundo</Text>
            <BotonSaludar/>
            <Contador/>
        </View>
        
    )
}

export default Home;
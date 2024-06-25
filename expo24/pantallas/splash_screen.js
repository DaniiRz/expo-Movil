import { Image, StyleSheet, View } from "react-native";
import Icon from "../imagenes/logo_rical.png";

export default function Pantalla1(){
    return(
        <View style={styles.container}>

            <View>

                <Image source={Icon} style={styles.image}/>
 
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#fffdff",
    },
    image: {
        width:100,
        height:100,
        resizeMode:"cover"
    },
});
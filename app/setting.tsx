import { useState } from "react";
import { Text, View } from "react-native";
function Settting(){
const [count,setCount] = useState(0)
const countXUda=()=>{
    setCount(count+1)
}

    return(
        <View>
            <Text onPress={countXUda}>Count badai</Text>
            <Text>{count}</Text>
        </View>
    )
}
export default Settting
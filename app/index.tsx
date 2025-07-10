import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/image.jpeg")}
        style={{ position: "relative", width: 300, height: 300 }}
      ></Image>
      <Text
        onPress={() => setVisible(true)}
        style={{
          position: "absolute",
          fontSize: 50,
          color: "white",
          marginLeft: 100,
          marginBottom: 110,
          padding: 5,
          borderWidth: 2,
          borderRadius: 10,
          backgroundColor: "black",
          opacity: 0.8,
        }}
      >
        click here
      </Text>
      {visible ? (
        <Text
          style={{
            opacity: 0.8,
          }}
        >
          hello mama
        </Text>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

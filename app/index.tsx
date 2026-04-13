import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarText}>Native App</Text>
      </View>

      {/* Image + Button Wrapper */}
      <View style={styles.imageWrapper}>
        <Image
          source={require("../assets/images/image.jpeg")}
          style={styles.image}
        />

        <Pressable
          onPress={() => router.push("/hello")}
          style={styles.buttonOverlay}
        >
          <Text style={styles.buttonText}>Click here</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  appBar: {
    width: "100%",
    padding: 15,
    backgroundColor: "black",
    alignItems: "center",
  },

  appBarText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  imageWrapper: {
    position: "relative",
    marginTop: 30,
  },

  image: {
    width: 280,
    height: 280,
    borderRadius: 15,
  },

  buttonOverlay: {
    position: "absolute",
    top: "35%",
    left: "45%",
    transform: [{ translateX: -50 }, { translateY: -20 }],
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    opacity: 0.85,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

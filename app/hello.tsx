import { Image, StyleSheet, Text, View } from "react-native";

export default function Hello() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello{"\n"}vanja</Text>

      <Text style={styles.emoji}>😂</Text>

      {/* Funny cat image */}
      <Image
        source={{
          uri: "https://cataas.com/cat",
        }}
        style={styles.cat}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  emoji: {
    fontSize: 40,
    marginTop: 10,
  },
  cat: {
    width: 250,
    height: 250,
    marginTop: 20,
    borderRadius: 20,
  },
});

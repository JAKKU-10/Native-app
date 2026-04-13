// import { useState } from "react";
// import { Image, StyleSheet, Text, View } from "react-native";

// export default function Index() {
//   const [visible, setVisible] = useState(false);
//   return (
//     <View style={styles.container}>
//       <Image
//         source={require("../assets/images/image.jpeg")}
//         style={{ position: "relative", width: 300, height: 300 }}
//       ></Image>
//       <Text
//         onPress={() => setVisible(true)}
//         style={{
//           position: "absolute",
//           fontSize: 50,
//           color: "white",
//           marginLeft: 100,
//           marginBottom: 110,
//           padding: 5,
//           borderWidth: 2,
//           borderRadius: 10,
//           backgroundColor: "black",
//           opacity: 0.8,
//         }}
//       >
//         click here
//       </Text>
//       {visible ? (
//         <Text
//           style={{
//             opacity: 0.8,
//           }}
//         >
//           hello mama
//         </Text>
//       ) : null}
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarText}>Hello there</Text>
      </View>

      {/* Image */}
      <Image
        source={require("../assets/images/image.jpeg")}
        style={styles.image}
      />

      {/* Button */}
      <Pressable onPress={() => router.push("/hello")} style={styles.button}>
        <Text style={styles.buttonText}>Click here</Text>
      </Pressable>
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
  image: {
    width: 280,
    height: 280,
    marginTop: 30,
    borderRadius: 15,
  },
  button: {
    marginTop: 20,
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

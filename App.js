
import { StyleSheet, Text, View } from "react-native";

export default function App() {

  return (

    <View style={styles.container}>
      <Text>Alou essa é a página da barbis</Text>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
});

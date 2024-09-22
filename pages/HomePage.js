import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text>Hello React Native</Text>
        <View style={styles.buttonWrapper}>
        <Button
          title="About Page"
          onPress={() => navigation.navigate("About")}
        ></Button>
        </View>
        </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button
          title="List Page"
          onPress={() => navigation.navigate("List")}
        ></Button>
        <StatusBar style="auto" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 48,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  buttonWrapper: {
    width: 150,  
    alignSelf: 'center',  
  }

});

import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Text,
  View,
} from "react-native";

export default function ListPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        <Button
          title="Home Page"
          onPress={() => navigation.navigate("Home")}
        ></Button>
        <Button
          title="About Page"
          onPress={() => navigation.navigate("About")}
        ></Button>
        </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => alert(`Pressed ${item.title}`)}>
          <Text
            style={{
              padding: 16,
              fontSize: 20,
              backgroundColor: "aqua",
              margin: 2,
            }}
          >
            {item.title}
          </Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const data = [
  {
    id: "1",
    title: "Item 1",
  },
  {
    id: "2",
    title: "Item 2",
  },
  {
    id: "3",
    title: "Item 3",
  },
  {
    id: "4",
    title: "Item 4",
  },
  {
    id: "5",
    title: "Item 5",
  },
  {
    id: "6",
    title: "Item 6",
  },
  {
    id: "7",
    title: "Item 7",
  },
  {
    id: "8",
    title: "Item 8",
  },
  {
    id: "9",
    title: "Item 9",
  },
  {
    id: "10",
    title: "Item 10",
  },
  {
    id: "11",
    title: "Item 11",
  },
  {
    id: "12",
    title: "Item 12",
  },
  {
    id: "13",
    title: "Item 13",
  },
  {
    id: "14",
    title: "Item 14",
  },
  {
    id: "15",
    title: "Item 15",
  },
  {
    id: "16",
    title: "Item 16",
  },
  {
    id: "17",
    title: "Item 17",
  },
  {
    id: "18",
    title: "Item 18",
  },
  {
    id: "19",
    title: "Item 19",
  },
  {
    id: "20",
    title: "Item 20",
  },
  {
    id: "21",
    title: "Item 21",
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    // paddingTop: 48,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  item: {
    padding: 16,
    fontSize: 20,
    backgroundColor: "aqua",
    margin: 2,
  },
});

import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, Image, View, Text, TouchableOpacity } from "react-native";

export default function GalleryPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal pagingEnabled style={styles.scrollContainer}>
        {data.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.learnMoreButton}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.learnMoreButtonText}>Learn More About Landmarks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.learnMoreButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.learnMoreButtonText}>Go Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const data = [
  { id: "1", title: "Eiffel Tower", image: require("../assets/Eiffel_tower.jpeg") },
  { id: "2", title: "Great Wall of China", image: require("../assets/great.wall.jpeg") },
  { id: "3", title: "Taj Mahal", image: require("../assets/taj_mahal.jpeg") },
  { id: "4", title: "Machu Picchu", image: require("../assets/machu-picchu.jpg") },
  { id: "5", title: "Statue of Liberty", image: require("../assets/statue_of_liberty.jpeg") },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    flexDirection: "row",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 300,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  learnMoreButton: {
    backgroundColor: "#ff8c00", 
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 20,
  },
  learnMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Pressable, FlatList } from "react-native";

export default function InfoPage({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);

  const toggleExpand = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Pressable onPress={() => toggleExpand(item.id)} style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
            </Pressable>

            {selectedId === item.id && (
              <Text style={styles.description}>{item.description}</Text>
            )}
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <Pressable style={styles.backButton} onPress={() => navigation.navigate("List")}>
        <Text style={styles.backButtonText}>Go to List</Text>
      </Pressable>
      <Pressable style={styles.backButton} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const data = [
  {
    id: "1",
    title: "What is the Eiffel Tower?",
    description: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It was completed in 1889 as the centerpiece of the 1889 World's Fair and has become a global icon of France and one of the most recognizable structures in the world.",
  },
  {
    id: "2",
    title: "Where is the Great Wall of China located?",
    description: "The Great Wall of China is located in northern China, running east to west across the country's historical northern borders. It was built to protect the Chinese states and empires from various nomadic groups of the Eurasian Steppe.",
  },
  {
    id: "3",
    title: "Why is the Taj Mahal famous?",
    description: "The Taj Mahal is famous for its stunning Mughal architecture and its significance as a symbol of love. It was commissioned by Emperor Shah Jahan in 1632 to house the tomb of his beloved wife, Mumtaz Mahal, and is now a UNESCO World Heritage Site.",
  },
  {
    id: "4",
    title: "Who built Machu Picchu?",
    description: "Machu Picchu was built by the Inca emperor Pachacuti in the 15th century. It is located in the Andes Mountains of Peru and is often referred to as the 'Lost City of the Incas'. Machu Picchu is a UNESCO World Heritage Site and is one of the most visited landmarks in South America.",
  },
  {
    id: "5",
    title: "What is the significance of the Statue of Liberty?",
    description: "The Statue of Liberty, located on Liberty Island in New York Harbor, was a gift from France to the United States in 1886. It symbolizes freedom, democracy, and the friendship between the two nations. The statue is a significant symbol of hope and new beginnings for immigrants arriving in America.",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
  backButton: {
    backgroundColor: "#4682b4", 
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginTop: 20,
    alignSelf: "center",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
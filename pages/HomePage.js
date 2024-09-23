import React from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView } from "react-native";

export default function StartPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground
          source={require("../assets/cityscape.jpeg")} 
          style={styles.heroSection}
        >
          <Text style={styles.heroTitle}>Discover the World's Wonders</Text>
        </ImageBackground>

        <View style={styles.textSection}>
          <Text style={styles.heading}>Your Adventure Begins Here</Text>
          <Text style={styles.paragraph}>
            Embark on a journey through the world's most iconic landmarks and hidden gems. Whether you're drawn to ancient history or modern marvels, we have a guide for you.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => navigation.navigate("List")}
        >
          <Text style={styles.exploreButtonText}>Explore Landmarks</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Ready to Learn More?</Text>
          <TouchableOpacity
            style={styles.aboutButton}
            onPress={() => navigation.navigate("About")}
          >
            <Text style={styles.aboutButtonText}>Learn About Us</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  heroSection: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  textSection: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginHorizontal: 20,
  },
  exploreButton: {
    backgroundColor: "#ff6347", 
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginVertical: 20,
  },
  exploreButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    alignItems: "center",
    marginTop: 40,
  },
  footerText: {
    fontSize: 18,
    color: "#333",
  },
  aboutButton: {
    marginTop: 10,
    backgroundColor: "#4682b4", 
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  aboutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
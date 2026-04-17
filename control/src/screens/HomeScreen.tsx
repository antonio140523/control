import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍲 Sabor de Casa</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Prato do dia</Text>
        <Text style={styles.cardText}>Arroz, feijão e carne caseira ❤️</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sugestões</Text>
        <Text style={styles.cardText}>Receitas simples e cheias de sabor</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF3E0", // creme aconchegante
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5C3A21",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#7A5230",
    textAlign: "center",
    marginBottom: 25,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D2B48C",
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5C3A21",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: "#7A5230",
  },
});
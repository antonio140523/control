import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SugestoesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍞 Sugestões Artesanais</Text>
      <Text style={styles.subtitle}>
        Feito com carinho, como na cozinha de casa
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🥖 Pão caseiro crocante</Text>
        <Text style={styles.cardText}>
          Receita simples com fermentação natural
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🧈 Manteiga artesanal</Text>
        <Text style={styles.cardText}>
          Produzida com creme fresco e sal do campo
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🍯 Geleia caseira</Text>
        <Text style={styles.cardText}>
          Frutas naturais sem conservantes
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF3E0",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#5C3A21",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#7A5230",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E7C9A9",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5C3A21",
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: "#7A5230",
  },
});
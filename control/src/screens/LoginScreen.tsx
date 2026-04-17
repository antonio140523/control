import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    if (!email || !senha) {
      Alert.alert("🍯 Atenção", "Preencha email e senha");
      return;
    }

    if (email === "teste@artesanal.com" && senha === "1234") {
      Alert.alert("🥖 Sucesso", "Bem-vindo à cozinha artesanal!");
    } else {
      Alert.alert("🍞 Erro", "Credenciais inválidas");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🥖 Oficina Artesanal</Text>
        <Text style={styles.subtitle}>Entre na sua cozinha caseira</Text>

        <TextInput
          placeholder="Email artesanal"
          placeholderTextColor="#8B5E3C"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <TextInput
          placeholder="Senha secreta da receita"
          placeholderTextColor="#8B5E3C"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
        />

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar na cozinha</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF3E0", // creme artesanal
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E7C9A9",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#5C3A21",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#7A5230",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#D2B48C",
    color: "#5C3A21",
  },
  button: {
    backgroundColor: "#A0522D",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
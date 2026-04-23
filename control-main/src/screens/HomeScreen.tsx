import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <Text style={styles.subtitle}>Acesse o sistema</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#64748b"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#64748b"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0f172a",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 32,
        color: "#38bdf8",
        fontWeight: "bold",
        letterSpacing: 2,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: "#94a3b8",
        marginBottom: 30,
    },
    input: {
        width: "100%",
        backgroundColor: "#1e293b",
        color: "#e2e8f0",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#334155",
    },
    button: {
        width: "100%",
        backgroundColor: "#38bdf8",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#0f172a",
        fontWeight: "bold",
        fontSize: 16,
    },
});
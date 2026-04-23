import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function EntidadeScreen() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Entidade</Text>
            <Text style={styles.subtitle}>Cadastro de entidade</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome da entidade"
                placeholderTextColor="#64748b"
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Descrição"
                placeholderTextColor="#64748b"
                multiline
                numberOfLines={4}
                value={descricao}
                onChangeText={setDescricao}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0f172a",
        padding: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
        color: "#38bdf8",
        fontWeight: "bold",
        marginBottom: 5,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 14,
        color: "#94a3b8",
        marginBottom: 25,
        textAlign: "center",
    },
    input: {
        backgroundColor: "#1e293b",
        color: "#e2e8f0",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#334155",
    },
    textArea: {
        height: 100,
        textAlignVertical: "top",
    },
    button: {
        backgroundColor: "#38bdf8",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#0f172a",
        fontWeight: "bold",
        fontSize: 16,
    },
});
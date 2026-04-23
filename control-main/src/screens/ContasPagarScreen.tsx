import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function ContasPagarScreen() {
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [data, setData] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contas a Pagar</Text>
            <Text style={styles.subtitle}>Controle financeiro</Text>

            <TextInput
                style={styles.input}
                placeholder="Descrição"
                placeholderTextColor="#64748b"
                value={descricao}
                onChangeText={setDescricao}
            />

            <TextInput
                style={styles.input}
                placeholder="Valor (R$)"
                placeholderTextColor="#64748b"
                keyboardType="numeric"
                value={valor}
                onChangeText={setValor}
            />

            <TextInput
                style={styles.input}
                placeholder="Data (dd/mm/aaaa)"
                placeholderTextColor="#64748b"
                value={data}
                onChangeText={setData}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Salvar Conta</Text>
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
        textAlign: "center",
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: "#94a3b8",
        textAlign: "center",
        marginBottom: 25,
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
import { View, Text, StyleSheet } from "react-native";

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Acesse o sistema</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0f172a", // azul escuro (tech)
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 32,
        color: "#38bdf8", // azul neon
        fontWeight: "bold",
        letterSpacing: 2,
    },
    subtitle: {
        fontSize: 14,
        color: "#94a3b8", // cinza moderno
        marginTop: 8,
    },
});
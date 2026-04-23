import React from "react";

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList
} from "@react-navigation/drawer";

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import Entidade from "../screens/EntidadeScreen";
import ContasREeceber from "../screens/ContasReceberScreen";
import ContasPagar from "../screens/ontasPagarScreen";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {

    const user = {
        nome: "João Silva",
        foto: "https://i.pravatar.cc/100"
    };

    return (

        <View style={StyleSheet.container}>

            <DrawerContentScrollView {...props}>

        <View style={styles.header}>

        <Image
        source={{ uri: user.foto }}
        style={StyleSheet.avatar}
        />

        <Text style={StyleSheet.name}>
            {user.nome}
        </Text>

        </View>

        <DrawerItemList {...props} />

        </DrawerContentScrollView>

        <View style={StyleSheet.footer}>

            <TouchableOpacity
            style={StyleSheet.logoutButton}
            onPress={() => console.log("Logout")}>

                <Ionicons name="log-out-outline" size={22} color="#fff" />

                <Text style={StyleSheet.logoutText}>
                    Deslogar
                    </Text>

            </TouchableOpacity>

        </View>
 </View>   

);

}

export default function DrawerRoutes() {

    return (

        <Drawer.Screen
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
            headerStyle: {
                backgroundColor: "#1E88E5"
            
            };

            headerTintColor: "#fff",
            drawerActiveTintColor"#1E88E5"
        }}
        >
        
        <Drawer.Screen
        
        name="Home"
        componet={HomeScreen}
        options={{

            
        }}>
    )
}

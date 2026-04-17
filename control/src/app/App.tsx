import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "../routes/AppRoutes";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
import React, { useEffect } from "react";
import theme from "../shared/theme";
import { ThemeProvider } from "styled-components";
import HookProvider from "./hooks";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { StatusBar, Text } from "react-native";
import { AuthProvider } from "./hooks/auth";
import { Routes } from "./router";
import { SignIn } from "@modules/SignIn";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <Text> Carregando... </Text>
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor='transparent' translucent />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { styles } from "./styles/LoginStyles"; // <--- Importando os estilos aqui

const { width, height } = Dimensions.get("window");

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />

      {/* ONDA - Z-Index 0 para ficar no fundo */}
      <View style={styles.waveContainer} pointerEvents="none">
        <Svg
          width={width}
          height={250}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <Path
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,122.7C672,96,768,96,864,122.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="#2F9E41"
            fillOpacity={0.2}
          />
          <Path
            d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,122.7C840,107,960,117,1080,128C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            fill="#2F9E41"
            fillOpacity={0.4}
          />
          <Path
            d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,80C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            fill="#2F9E41"
            fillOpacity={0.8}
          />
        </Svg>
      </View>

      <KeyboardAvoidingView 
        // No Android, o 'padding' com um offset costuma ser a solução real
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "android" ? -150 : 0} 
        style={{ flex: 1 }}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          // Isso garante que o teclado feche ao tocar fora
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.ifLogoContainer}>
              <View style={[styles.dot, { backgroundColor: "#2F9E41" }]} />
              <View style={[styles.dot, { backgroundColor: "#E9190F" }]} />
            </View>
            <Text style={styles.title}>IFRN</Text>
            <Text style={styles.subtitle}>Sistemas de Acesso</Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Matrícula</Text>
            <TextInput
              style={styles.input}
              placeholder="Matrícula"
              placeholderTextColor="#444"
              value={email}
              onChangeText={setEmail}
            />
            
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#444"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity 
              style={styles.loginButton} 
              onPress={() => navigation.replace('Home')}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>

          {/* O rodapé agora dentro do scroll para não sumir */}
          <View style={styles.footerInside}>
            <Text style={styles.footerText}>PROJETO INTEGRADOR • 2026</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, Felipe!</Text>
      
      <TouchableOpacity style={styles.lockButton}>
        <Text style={styles.lockButtonText}>LIBERAR PORTA</Text>
      </TouchableOpacity>

      <View style={styles.historyCard}>
        <Text style={styles.historyTitle}>Último acesso:</Text>
        <Text>Felipe José - Hoje às 14:30</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5DC', alignItems: 'center', paddingTop: 60 },
  title: { fontSize: 24, color: '#4A4A4A', marginBottom: 50 },
  lockButton: { width: 180, height: 180, borderRadius: 90, backgroundColor: '#FF6B6B', justifyContent: 'center', alignItems: 'center', elevation: 5 },
  lockButtonText: { color: '#FFF', fontWeight: 'bold' },
  historyCard: { marginTop: 40, backgroundColor: '#FFF', padding: 20, borderRadius: 15, width: '90%' },
  historyTitle: { fontWeight: 'bold', marginBottom: 5 }
});
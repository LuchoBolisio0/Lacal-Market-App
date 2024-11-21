import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OrdersScreen = () => {
  const orders = [
    { id: 1, title: 'Pedido #1', description: 'Descripción del pedido 1' },
    { id: 2, title: 'Pedido #2', description: 'Descripción del pedido 2' },
    { id: 3, title: 'Pedido #3', description: 'Descripción del pedido 3' },
  ];
  return (
    <View style={styles.container}>
      {orders.map((order) => (
        <View key={order.id} style={styles.card}>
          <Text style={styles.cardTitle}>{order.title}</Text>
          <Text style={styles.cardDescription}>{order.description}</Text>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>Aceptar</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
    marginBottom: 20
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, 
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    marginBottom: 16,
    color: '#555',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrdersScreen;

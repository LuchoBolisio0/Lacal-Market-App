import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IndexScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Local Market</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5AFAA4',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default IndexScreen;
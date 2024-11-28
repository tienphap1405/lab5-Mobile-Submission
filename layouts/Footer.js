// Footer.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.Text}>Footer Content Here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 50,
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  Text: {
    color: 'white'
  }
});

export default Footer;
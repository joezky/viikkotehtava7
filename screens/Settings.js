import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ThemeSwitchButton from '../components/ThemeSwitchButton';
import Styles from '../Styles'
import { useTheme } from '../context/useTheme'

export default function Settings() {
  const { isDarkMode } = useTheme()
  return (
    <View style={[styles.container,isDarkMode ? Styles.dark : Styles.light]}>
      <ThemeSwitchButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});


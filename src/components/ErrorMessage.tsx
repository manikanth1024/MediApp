import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing, FontSize, Radius } from '../utils/theme';

interface ErrorCardProps {
  status: string; 
}

export const ErrorMessage: React.FC<ErrorCardProps> = ({ status }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>⚠️</Text>
      <Text style={styles.title}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.errorLight,
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.error + '33',
  },
  icon: { fontSize: 36, marginBottom: Spacing.sm },
  title: {
    fontSize: FontSize.lg,
    fontWeight: 'bold',
    color: Colors.error,
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  message: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: Spacing.md,
  },
  button: { width: '100%', marginTop: Spacing.xs },
});

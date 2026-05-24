import React from 'react';
import { View, StyleSheet } from 'react-native';
import { prescriptionResponse } from '../utils/types';
import { Colors, FontSize, Spacing, Radius } from '../utils/theme';
import { strings } from '../utils/strings';
import { Label } from './Label';

interface prescriptionCardProps {
  data: prescriptionResponse;
}

const Row: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <View style={styles.row}>
    <Label title={label} textStyle={styles.rowLabel} />
    <Label title={value} textStyle={styles.rowValue} />
  </View>
);

export const PrescriptionCard: React.FC<prescriptionCardProps> = ({ data }) => (
  <View style={styles.card}>
    <Row label={strings.reviewFlow.labels.prescriptionRef} value={data.prescriptionReference} />
    <View style={styles.divider} />
    <Row label={strings.reviewFlow.labels.medication} value={data.medicationName} />
    <View style={styles.divider} />
    <Row label={strings.reviewFlow.labels.patient} value={data.patientReference} />
    <View style={styles.divider} />
    <Row label={strings.reviewFlow.labels.pharmacy} value={data.pharmacyName} />
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: Radius.lg,
    padding: Spacing.lg,
  },
  demoNotice: {
    backgroundColor: Colors.warningLight,
    borderRadius: Radius.sm,
    padding: Spacing.sm,
    marginBottom: Spacing.md,
  },
  demoText: {
    fontSize: FontSize.xs,
    color: Colors.warning,
    textAlign: 'center',
    fontWeight: '700'
  },
  row: {
    paddingVertical: Spacing.sm,
  },
  rowLabel: {
    fontSize: FontSize.md,
    color: Colors.primaryLight,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  rowValue: {
    fontSize: FontSize.md,
    color: Colors.textPrimary,
    fontWeight: 'black'
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
  },
});

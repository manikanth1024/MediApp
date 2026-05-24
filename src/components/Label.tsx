import React from 'react';
import {StyleSheet, Text, TextStyle } from 'react-native';
import { FontSize } from '../utils/theme';

interface titleProps {
    title: string,
    textStyle?: TextStyle 
}

export const Label: React.FC<titleProps> = ({title, textStyle}) => {
    return (
        <Text style={[styles.label, textStyle]}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: FontSize.lg,
        fontWeight: '600',
    }
})
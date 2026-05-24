import React from "react"
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import { Label } from "./Label"
import { Colors, Radius, Spacing } from "../utils/theme"

interface noteProps {
    title: string,
    style?: ViewStyle,
    textStyle?: TextStyle
}

export const NoteSection: React.FC<noteProps> = ({title, style, textStyle}) => {
    return (
        <View style={[styles.descriptionContent, style]}>
            <Label title={title} textStyle={textStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    descriptionContent: {
        margin: Spacing.sm,        
        borderRadius: Radius.sm,
        padding: Spacing.sm,
        backgroundColor: Colors.warningLight,
    },
})
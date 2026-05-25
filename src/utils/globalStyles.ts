import { StyleSheet } from "react-native";
import { Colors, Spacing } from "./theme";

export const rootStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    noteSectionContent: {
        backgroundColor: Colors.white
    },
    textSecondary: {color: Colors.textSecondary},
    ctaContent: { 
        marginTop: Spacing.xl, 
        alignItems :  'center',
    },
})
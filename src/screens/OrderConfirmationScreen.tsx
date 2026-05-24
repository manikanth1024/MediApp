import React from "react";
import {StyleSheet, View} from 'react-native';
import { rootStyles } from "../utils/globalStyles";
import { NoteSection } from "../components/NoteSection";
import { useSelector } from "react-redux";
import { Colors } from "../utils/theme";
import { Button } from "../components/Button";
import { strings } from "../utils/strings";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";

type props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'orderconfirmation'>;
};

export const OrderConfirmationScreen: React.FC<props> = ({navigation}) => {

    const reviewResult = useSelector((state: any) => state.prescriptionReview.reviewResult);

    const goHome = () => {
        navigation.popToTop()
    }
 
    return (
        <View style={rootStyles.container}>
            <NoteSection title={`✅ ${reviewResult.status}`} style={styles.successBg} textStyle={styles.successText} />
            <NoteSection title={reviewResult.message} textStyle={rootStyles.textSecondary} style={rootStyles.noteSectionContent}  />
            <View style={rootStyles.ctaContent}>
                <Button label={strings.confirmationFlow.goHome} onPress={goHome} />    
            </View>          
        </View> 
    )
}

const styles = StyleSheet.create({
    successBg: {backgroundColor: Colors.successLight},
    successText: {color: Colors.success}
})
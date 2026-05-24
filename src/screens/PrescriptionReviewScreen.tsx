import React from "react";
import { StyleSheet, View } from 'react-native';
import { rootStyles } from "../utils/globalStyles";
import { Button } from "../components/Button";
import { strings } from "../utils/strings";
import { PrescriptionCard } from "../components/PrescriptionDetailsCard";
import { useDispatch, useSelector } from "react-redux";
import { Colors, FontSize } from "../utils/theme";
import { NoteSection } from "../components/NoteSection";
import { submitOrderRequest } from "../services/prescriptionReviewService";
import { setLoadingState, setPrescriptionReviewResult } from "../store/slices/prescriptionReviewSlice";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";

type props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'prescriptionreview'>;
};

export const PrescriptionReviewScreen: React.FC<props> = ({navigation}) => {
    const dipatch = useDispatch();
    const prescriptionData = useSelector((state: any) => state.sessionStatus.prescriptionResult);
    const isLoading = useSelector((state: any) => state.prescriptionReview.isLoading);

    const submitOrder = async () => {
        dipatch(setLoadingState(true));
        try {
            const result = await submitOrderRequest({
                sessionId: prescriptionData.sessionId,
                prescriptionReference: prescriptionData.prescriptionReference,
                pharmacyId: prescriptionData.pharmacyId,
                patientReference: prescriptionData.patientReference,
            })
            dipatch(setPrescriptionReviewResult(result));
        }catch(err) {
            console.log(err);
        }finally {
            dipatch(setLoadingState(false));
        }
        navigation.navigate('orderconfirmation');
    }

    return (
        <View style={rootStyles.container}>
            <PrescriptionCard data={prescriptionData} />
            <NoteSection title={strings.reviewFlow.demoNotice} textStyle={styles.demoText}/>
            <View style={rootStyles.ctaContent}>
                <Button 
                    label={strings.reviewFlow.cta} 
                    onPress={submitOrder}
                    loading={isLoading}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    demoText: {
        fontSize: FontSize.md,
        color: Colors.warning,
    },
});

import React, {useEffect } from "react";
import {View, StyleSheet} from 'react-native';
import { rootStyles } from "../utils/globalStyles";
import { checkSessionStatus, completePrescriptionSession, delay, startPrescriptionSession } from "../services/sessionStatusService";
import { useDispatch, useSelector } from "react-redux";
import { savePrescriptionResult, setLoadingState, updateSessionStatus } from "../store/slices/sessionStatusSlice";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import { statusSteps, stepStatus, strings } from "../utils/strings";
import { StatusItem } from "../components/StepItem";
import { Colors, FontSize, Spacing } from "../utils/theme";
import { Label } from "../components/Label";

type props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'sessionstatus'>;
};


export const SessionStatusScreen: React.FC<props> = ({navigation}) => {

    const dispatch = useDispatch();

    const currentStep = useSelector((state: any) => state.sessionStatus.status)

    const startSessionFlow = async () => {
        dispatch(setLoadingState(true))
        try {
            await startPrescriptionSession();

            const authStatus = await checkSessionStatus('created');
            dispatch(updateSessionStatus(authStatus))

            const receivedStatus = await checkSessionStatus(authStatus);
            dispatch(updateSessionStatus(receivedStatus))

            const readyStatus = await checkSessionStatus(receivedStatus);
            dispatch(updateSessionStatus(readyStatus))

            const prescriptionData = await completePrescriptionSession();
            dispatch(savePrescriptionResult(prescriptionData));

            await delay(1500)

            if(readyStatus && prescriptionData){
                navigation.navigate('prescriptionreview')
            }

        }
        catch(err: any) {
            console.log(err)
            dispatch(updateSessionStatus('error'))
        } finally {
            dispatch(setLoadingState(false))
        }
        
    }

    useEffect(() => {
        startSessionFlow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <View style={rootStyles.container}>
            <Label title={strings.sessionFlow.title} textStyle={styles.title} />
        
            <View style={styles.statusContainer}>
            {
                statusSteps.map((item, index) => {
                    const currentIndex = stepStatus[currentStep]
                    const completed = index <= currentIndex;
                    const active = index === currentIndex && currentStep !== 'ready';
                    return (
                        <StatusItem 
                            key={item.key}
                            label={item.label}
                            completed={completed}
                            active={active}
                        />
                    )
                })
            }
            <Label title={strings.sessionFlow.subtitle} textStyle={styles.subtitle} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    statusContainer: {
        margin: Spacing.lg    
    },
    title: {
        fontSize: FontSize.lg,
        marginTop: Spacing.lg,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: FontSize.sm,
        color: Colors.textSecondary,
        paddingTop: Spacing.lg,
    },
})
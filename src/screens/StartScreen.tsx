import React from "react";
import {View, Image, StyleSheet} from 'react-native';
import { rootStyles } from "../utils/globalStyles";
import { strings } from "../utils/strings";
import { Label } from "../components/Label";
import { Colors, FontSize } from "../utils/theme";
import { Button } from "../components/Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import { NoteSection } from "../components/NoteSection";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { updateSessionStatus } from "../store/slices/sessionStatusSlice";

type props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'start'>;
};

export const StartScreen: React.FC<props> = ({navigation}) => {

    const dispatch = useDispatch();

    const onStartPresscriptionPress = () => {
        navigation.navigate('sessionstatus');
        dispatch(updateSessionStatus('created'))
    }

    return (
        <SafeAreaView style={rootStyles.container}>
            <View style={ styles.content}>
                <Image source={require('../../assets/pharmacy_logo.jpg')} style={styles.logo} />
                <Label title={strings.startFlow.pharmacyName} textStyle={styles.pharmacyTitle}/>
            </View>
            <NoteSection title={strings.startFlow.startScreenDescription} textStyle={rootStyles.textSecondary} style={rootStyles.noteSectionContent} />
            <NoteSection title={strings.startFlow.trustMessage} textStyle={{color: Colors.warning}} />
            <View style={rootStyles.ctaContent}>
                <Button
                    label={strings.startFlow.cta}
                    onPress={onStartPresscriptionPress}
                    variant="primary"
                />
            </View>
        </SafeAreaView>                 
    )
}

const styles = StyleSheet.create({
    content: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 120
    },
    pharmacyTitle: {
        fontSize: FontSize.xxl,
        color: Colors.primary
    },
    descriptionContent: {
        backgroundColor: Colors.white
    },

})
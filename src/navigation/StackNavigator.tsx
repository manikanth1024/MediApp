import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../utils/theme";
import { StartScreen } from "../screens/StartScreen";
import { SessionStatusScreen } from "../screens/SessionStatusScreen";
import { PrescriptionReviewScreen } from "../screens/PrescriptionReviewScreen";
import { OrderConfirmationScreen } from "../screens/OrderConfirmationScreen";

export type RootStackParamList = {
  start: undefined;
  sessionstatus: undefined;
  prescriptionreview: undefined,
  orderconfirmation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="start"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.white,  },
        headerTintColor: Colors.primary,
        headerTitleStyle: { fontWeight: '600' },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        name="start"
        component={StartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="sessionstatus"
        component={SessionStatusScreen}
        options={{ title: 'Prescription Session' }}
      />
      <Stack.Screen
        name="prescriptionreview"
        component={PrescriptionReviewScreen}
        options={{ title: 'Review Prescription' }}
      />
      <Stack.Screen
        name="orderconfirmation"
        component={OrderConfirmationScreen}
        options={{ title: 'Confirmation', headerBackVisible: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
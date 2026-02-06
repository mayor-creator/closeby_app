import {
	NotoSansDisplay_400Regular,
	NotoSansDisplay_500Medium,
	NotoSansDisplay_600SemiBold,
	NotoSansDisplay_700Bold,
	useFonts,
} from "@expo-google-fonts/noto-sans-display";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { EventBottomTabs } from "./navigation/bottomTabs/BottomTabs";
import { EventDetailsScreen } from "./screens/EventDetailsScreen";
import { COLORS } from "./theme/Colors";
import type { RootStackParamList } from "./types/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	const [fontsLoaded] = useFonts({
		NotoSansDisplay_400Regular,
		NotoSansDisplay_500Medium,
		NotoSansDisplay_600SemiBold,
		NotoSansDisplay_700Bold,
	});

	if (!fontsLoaded) return null;

	return (
		<NavigationContainer>
			<StatusBar style="auto" />
			<Stack.Navigator
				screenOptions={{
					headerStyle: { backgroundColor: COLORS.card },
					headerTintColor: COLORS.brandPrimary,
				}}
			>
				<Stack.Screen
					name="Home"
					component={EventBottomTabs}
					options={{ headerShown: false, title: "" }}
				/>
				<Stack.Screen
					name="EventsDetails"
					component={EventDetailsScreen}
					options={{ title: "Event Details" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

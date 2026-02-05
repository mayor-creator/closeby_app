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

const Stack = createNativeStackNavigator();

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
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={EventBottomTabs}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

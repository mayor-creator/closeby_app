import {
	NotoSansDisplay_400Regular,
	NotoSansDisplay_500Medium,
	NotoSansDisplay_600SemiBold,
	NotoSansDisplay_700Bold,
	useFonts,
} from "@expo-google-fonts/noto-sans-display";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function App() {
	const [fontsLoaded] = useFonts({
		NotoSansDisplay_400Regular,
		NotoSansDisplay_500Medium,
		NotoSansDisplay_600SemiBold,
		NotoSansDisplay_700Bold,
	});

	if (!fontsLoaded) return null;

	return (
		<View>
			<StatusBar style="auto" />
		</View>
	);
}

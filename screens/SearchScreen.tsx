import { StyleSheet, View } from "react-native";
import { Input } from "../components/ui/TextInput";
import { COLORS } from "../theme/Colors";

export const EventSearch = () => {
	return (
		<View style={styles.container}>
			<Input placeholder="Event Name" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.background,
	},
});

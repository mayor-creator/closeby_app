import { StyleSheet, View } from "react-native";
import { EventsList } from "../components/EventsList";
import { COLORS } from "../theme/Colors";

export const EventHome = () => {
	return (
		<View style={styles.container}>
			<EventsList />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.background,
	},
});

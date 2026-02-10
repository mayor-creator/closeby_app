import { StyleSheet, View } from "react-native";
import { EventDetails } from "../components/EventDetails";
import { COLORS } from "../theme/Colors";
import type { EventsDetailsProps } from "../types/types";

export const EventDetailsScreen = ({ route }: EventsDetailsProps) => {
	const { title, description, date, time, location, isFree, eventId } =
		route.params;

	return (
		<View style={styles.container}>
			<EventDetails
				eventId={eventId}
				title={title}
				description={description}
				date={date}
				time={time}
				location={location}
				isFree={isFree}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.background,
		padding: 24,
	},
});

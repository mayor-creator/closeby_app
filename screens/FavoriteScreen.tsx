import { use } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { EventItem } from "../components/EventItem";
import { EventContext } from "../context/EventContext";
import { eventData } from "../data/eventData";
import { COLORS } from "../theme/Colors";

export const EventFavorite = () => {
	const { favoriteEventsId } = use(EventContext);

	// for each category give me its events and put them all into one list
	const allEvents = eventData.categories.flatMap((category) => category.events);

	const favoriteEvents = allEvents.filter((event) =>
		favoriteEventsId.includes(event.eventId),
	);

	if (favoriteEvents.length === 0) {
		return (
			<View style={styles.container}>
				<Text style={styles.noFavoriteText}>No favorites yet</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={favoriteEvents}
				keyExtractor={(item) => item.eventId}
				renderItem={({ item }) => <EventItem event={item} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.background,
		paddingHorizontal: 24,
	},
	noFavoriteText: {
		textAlign: "center",
		fontSize: 24,
		paddingTop: 24,
	},
});

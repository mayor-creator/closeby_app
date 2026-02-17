import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { use, useMemo, useState } from "react";
import {
	FlatList,
	type ListRenderItem,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { EventCard } from "../components/EventCard";
import { Input } from "../components/ui/TextInput";
import { EventContext } from "../context/EventContext";
import { eventData } from "../data/eventData";
import { COLORS } from "../theme/Colors";
import type { Event, RootStackParamList } from "../types/types";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;

export const EventSearch = () => {
	const navigation = useNavigation<NavigationProps>();
	const [searchQuery, setSearchQuery] = useState("");
	const { favoriteEventsId, toggleFavorite } = use(EventContext);

	const allEvents = eventData.categories.flatMap((category) => category.events);

	const filteredEvents = useMemo(() => {
		if (!searchQuery.trim()) return allEvents;

		return allEvents.filter((event) =>
			event.title.toLowerCase().includes(searchQuery.toLowerCase()),
		);
	}, [searchQuery, allEvents]);

	const renderSearchItems: ListRenderItem<Event> = ({ item }) => {
		const isFavorite = favoriteEventsId.includes(item.eventId);

		return (
			<EventCard
				onPress={() =>
					navigation.navigate("EventsDetails", {
						...item,
					})
				}
				title={item.title}
				description={item.description}
				date={item.date}
				time={item.time}
				favoriteOnPress={() => toggleFavorite(item.eventId)}
				name={isFavorite ? "heart" : "heart-outline"}
				size={24}
				color={COLORS.favorite}
			/>
		);
	};

	return (
		<View style={styles.container}>
			<Input
				placeholder="Search events..."
				value={searchQuery}
				onChangeText={setSearchQuery}
			/>

			<FlatList
				data={filteredEvents}
				keyExtractor={(item) => item.eventId}
				renderItem={renderSearchItems}
				ListEmptyComponent={
					<Text style={styles.noSearchEventText}>No events found</Text>
				}
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
	noSearchEventText: {
		textAlign: "center",
		fontSize: 24,
		paddingTop: 24,
	},
});

import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { use } from "react";
import { FlatList, type ListRenderItem, StyleSheet, View } from "react-native";
import { EventContext } from "../context/EventContext";
import { eventData } from "../data/eventData";
import { COLORS } from "../theme/Colors";
import type { EventWithCategory, RootStackParamList } from "../types/types";
import { EventCard } from "./EventCard";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;

export const EventsList = () => {
	const { favoriteEventsId, toggleFavorite } = use(EventContext);

	const navigation = useNavigation<NavigationProps>();

	//create an empty array
	const eventWithCategories: EventWithCategory[] = [];

	/*loop over each category first then 
    loop over events inside that category and 
    create a new object that combines both event + category */
	eventData.categories.forEach((category) => {
		category.events.forEach((event) => {
			eventWithCategories.push({
				...event,
				categoryId: category.categoryId,
				categoryName: category.categoryName,
			});
		});
	});

	const renderEventsListItems: ListRenderItem<EventWithCategory> = ({
		item,
	}) => {
		const isFavorite = favoriteEventsId.includes(item.eventId);

		return (
			<EventCard
				onPress={() =>
					navigation.navigate("EventsDetails", {
						...item,
					})
				}
				title={item.title}
				date={item.date}
				categoryName={item.categoryName}
				favoriteOnPress={() => toggleFavorite(item.eventId)}
				name={isFavorite ? "heart" : "heart-outline"}
				size={24}
				color={COLORS.favorite}
			></EventCard>
		);
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={eventWithCategories}
				renderItem={renderEventsListItems}
				keyExtractor={(item) => item.eventId}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
	},
});

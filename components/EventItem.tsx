import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { use } from "react";
import { Pressable, Text, View } from "react-native";
import { EventContext } from "../context/EventContext";
import { COLORS } from "../theme/Colors";
import type { Event, RootStackParamList } from "../types/types";

type EventItemProps = {
	event: Event;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;

export const EventItem = ({ event }: EventItemProps) => {
	const { favoriteEventsId, toggleFavorite } = use(EventContext);
	const isFavorite = favoriteEventsId.includes(event.eventId);

	const navigation = useNavigation<NavigationProps>();

	return (
		<View>
			<Pressable
				onPress={() =>
					navigation.navigate("EventsDetails", {
						...event,
					})
				}
			>
				<View>
					<Text>{event.title}</Text>
					<Text>{event.description}</Text>
					<Text>{event.date}</Text>
					<Text>{event.time}</Text>
					<Text>{event.location}</Text>
				</View>
			</Pressable>

			<Pressable onPress={() => toggleFavorite(event.eventId)}>
				<Ionicons
					name={isFavorite ? "heart" : "heart-outline"}
					size={24}
					color={COLORS.favorite}
				/>
			</Pressable>
		</View>
	);
};

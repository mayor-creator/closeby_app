import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { use } from "react";

import { EventContext } from "../context/EventContext";
import { COLORS } from "../theme/Colors";
import type { Event, RootStackParamList } from "../types/types";
import { EventCard } from "./EventCard";

type EventItemProps = {
	event: Event;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;

export const EventItem = ({ event }: EventItemProps) => {
	const { favoriteEventsId, toggleFavorite } = use(EventContext);
	const isFavorite = favoriteEventsId.includes(event.eventId);

	const navigation = useNavigation<NavigationProps>();

	return (
		<EventCard
			onPress={() =>
				navigation.navigate("EventsDetails", {
					...event,
				})
			}
			title={event.title}
			description={event.description}
			date={event.date}
			time={event.time}
			location={event.location}
			favoriteOnPress={() => toggleFavorite(event.eventId)}
			name={isFavorite ? "heart" : "heart-outline"}
			size={24}
			color={COLORS.favorite}
		/>
	);
};

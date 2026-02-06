import { View } from "react-native";
import { EventDetails } from "../components/EventDetails";
import type { EventsDetailsProps } from "../types/types";

export const EventDetailsScreen = ({ route }: EventsDetailsProps) => {
	const { title, description, date, time, location, isFree, eventId } =
		route.params;

	return (
		<View>
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

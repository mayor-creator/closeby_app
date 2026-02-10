import type { Event } from "../types/types";
import { EventCard } from "./EventCard";

export const EventDetails = ({
	title,
	description,
	date,
	time,
	location,
	isFree,
}: Event) => {
	return (
		<EventCard
			title={title}
			description={description}
			date={date}
			time={time}
			location={location}
			isFree={isFree}
		/>
	);
};

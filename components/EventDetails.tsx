import { StyleSheet, Text, View } from "react-native";
import type { Event } from "../types/types";

export const EventDetails = ({
	title,
	description,
	date,
	time,
	location,
}: Event) => {
	return (
		<View>
			<Text>{title}</Text>
			<Text>{description}</Text>
			<Text>{date}</Text>
			<Text>{time}</Text>
			<Text>{location}</Text>
		</View>
	);
};

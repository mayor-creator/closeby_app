import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
	FlatList,
	type ListRenderItem,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { eventData } from "../data/eventData";
import { COLORS } from "../theme/Colors";
import type { EventWithCategory, RootStackParamList } from "../types/types";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;

export const EventsList = () => {
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
		return (
			<View style={styles.card}>
				<Pressable
					onPress={() =>
						navigation.navigate("EventsDetails", {
							eventId: item.eventId,
							title: item.title,
							description: item.description,
							date: item.date,
							time: item.time,
							location: item.location,
							isFree: item.isFree,
						})
					}
					style={({ pressed }) => pressed && styles.pressed}
				>
					<View style={styles.eventContent}>
						<Text style={styles.eventText}>{item.title}</Text>
						<Text>{item.date}</Text>
						<Text>{item.categoryName}</Text>
					</View>
				</Pressable>

				<Pressable
					style={({ pressed }) => [
						styles.favoriteButton,
						pressed && styles.favoriteButtonPressed,
					]}
				>
					<Ionicons name="heart-outline" size={24} color={COLORS.favorite} />
				</Pressable>
			</View>
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
	card: {
		backgroundColor: COLORS.card,
		marginVertical: 12,
		borderRadius: 10,
		padding: 12,

		//Android
		elevation: 4,
		//iOS
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.15,
		shadowRadius: 4,
	},
	eventContent: {
		gap: 6,
	},
	eventText: {
		color: COLORS.textPrimary,
		fontFamily: "NotoSansDisplay_500Medium",
		fontSize: 18,
	},
	pressed: {
		opacity: 0.65,
		transform: [{ scale: 0.98 }],
	},
	favoriteButton: {
		alignSelf: "flex-start",
		marginTop: 8,
		paddingVertical: 8,
		paddingHorizontal: 8,
		borderRadius: 8,
	},
	favoriteButtonPressed: {
		backgroundColor: COLORS.accent,
	},
});

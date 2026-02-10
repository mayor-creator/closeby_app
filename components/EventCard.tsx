import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../theme/Colors";
import { RADIUS } from "../theme/Radius";
import { SPACING } from "../theme/Spacing";
import { TYPOGRAPHY } from "../theme/Typography";

type EventCardProps = {
	title: string;
	description?: string;
	date?: string;
	time?: string;
	location?: string;
	categoryName?: string;
	onPress: () => void;
	favoriteOnPress: () => void;
	name: React.ComponentProps<typeof Ionicons>["name"];
	size: number;
	color: string;
};

export const EventCard = ({
	title,
	description,
	date,
	time,
	location,
	name,
	size,
	color,
	categoryName,
	onPress,
	favoriteOnPress,
}: EventCardProps) => {
	return (
		<View style={styles.card}>
			<Pressable
				onPress={onPress}
				style={({ pressed }) => pressed && styles.pressed}
				accessibilityRole="button"
				accessibilityLabel={`Open event ${title}`}
			>
				<View style={styles.eventContent}>
					<Text style={TYPOGRAPHY.title}>{title}</Text>
					{description && <Text style={TYPOGRAPHY.body}>{description}</Text>}
					{date && <Text style={TYPOGRAPHY.meta}>{date}</Text>}
					{time && <Text style={TYPOGRAPHY.meta}>{time}</Text>}
					{categoryName && <Text style={TYPOGRAPHY.meta}>{categoryName}</Text>}
					{location && <Text style={TYPOGRAPHY.meta}>{location}</Text>}
				</View>
			</Pressable>

			<Pressable
				onPress={favoriteOnPress}
				style={({ pressed }) => [
					styles.favoriteButton,
					pressed && styles.favoriteButtonPressed,
				]}
				accessibilityLabel="Add to favorites"
				accessibilityHint="Marks this event as a favorite"
			>
				<Ionicons name={name} size={size} color={color} />
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: COLORS.card,
		marginVertical: SPACING.md,
		borderRadius: RADIUS.md,
		padding: SPACING.md,
		//Android
		elevation: 4,
		//iOS
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.15,
		shadowRadius: RADIUS.xs,
	},

	eventContent: {
		gap: 6,
	},

	pressed: {
		opacity: 0.65,
		transform: [{ scale: 0.98 }],
	},

	favoriteButton: {
		alignSelf: "flex-start",
		marginTop: SPACING.sm,
		paddingVertical: SPACING.sm,
		paddingHorizontal: SPACING.sm,
		borderRadius: SPACING.sm,
	},

	favoriteButtonPressed: {
		backgroundColor: COLORS.accent,
	},
});

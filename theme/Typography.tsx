import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";

export const TYPOGRAPHY = StyleSheet.create({
	title: {
		fontSize: 18,
		fontFamily: "NotoSansDisplay_600SemiBold",
		color: COLORS.textPrimary,
	},
	body: {
		fontSize: 14,
		fontFamily: "NotoSansDisplay_400Regular",
		color: COLORS.textSecondary,
	},
	meta: {
		fontSize: 12,
		fontFamily: "NotoSansDisplay_400Regular",
		color: COLORS.muted,
	},
});

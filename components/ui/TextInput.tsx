import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput, type TextInputProps, View } from "react-native";
import { COLORS } from "../../theme/Colors";

type InputProps = TextInputProps;

export const Input = (props: InputProps) => {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<View style={[styles.inputContainer, isFocused && styles.focusedContainer]}>
			<Ionicons
				name="search-outline"
				size={20}
				color={isFocused ? COLORS.brandPrimary : COLORS.textSecondary}
			/>
			<TextInput
				{...props}
				style={styles.input}
				placeholderTextColor={COLORS.textSecondary}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				returnKeyType="search"
				autoCorrect={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		marginHorizontal: 16,
		marginVertical: 10,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 14,
		height: 50,
		borderWidth: 1,
		borderColor: COLORS.border,
		borderRadius: 14,
		backgroundColor: COLORS.background,
	},
	input: {
		flex: 1,
		marginLeft: 10,
		fontFamily: "NotoSansDisplay_400Regular",
		fontSize: 16,
		color: COLORS.textPrimary,
	},
	focusedContainer: {
		borderColor: COLORS.brandPrimary,
	},
});

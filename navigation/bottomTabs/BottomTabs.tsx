import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EventFavorite } from "../../screens/FavoriteScreen";
import { EventHome } from "../../screens/HomeScreen";
import { EventSearch } from "../../screens/SearchScreen";
import { COLORS } from "../../theme/Colors";

const Tab = createBottomTabNavigator();

export const EventBottomTabs = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: COLORS.card },
				//headerShown: false,
				headerTintColor: COLORS.brandPrimary,
				tabBarStyle: {
					backgroundColor: COLORS.brandPrimary,
					borderTopColor: COLORS.border,
				},
				tabBarActiveTintColor: COLORS.iconActive,
				tabBarInactiveTintColor: COLORS.iconInactive,
				tabBarLabelStyle: {
					fontSize: 12,
					fontFamily: "NotoSansDisplay_400Regular",
				},
			}}
		>
			<Tab.Screen
				name="EventHome"
				component={EventHome}
				options={{
					title: "Event Home",
					tabBarLabel: "Home",
					tabBarIcon: ({ color, size, focused }) => (
						<Ionicons
							name={focused ? "home" : "home-outline"}
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="EventFavorite"
				component={EventFavorite}
				options={{
					title: "Event Favorite",
					tabBarLabel: "Favorite",
					tabBarIcon: ({ color, size, focused }) => (
						<Ionicons
							name={focused ? "bookmark" : "bookmark-outline"}
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="EventSearch"
				component={EventSearch}
				options={{
					title: "Event Search",
					tabBarLabel: "Search",
					tabBarIcon: ({ color, size, focused }) => (
						<Ionicons
							name={focused ? "search" : "search-outline"}
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

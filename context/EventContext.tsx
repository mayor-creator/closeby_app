import type { ReactNode } from "react";
import { createContext, useState } from "react";

type EventContextProviderProps = {
	children: ReactNode;
};

type EventContextProps = {
	favoriteEventsId: string[];
	toggleFavorite: (eventId: string) => void;
};

export const EventContext = createContext<EventContextProps>(
	{} as EventContextProps,
);

export const EventContextProvider = ({
	children,
}: EventContextProviderProps) => {
	const [favoriteEventsId, setFavoriteEventsId] = useState<string[]>([]);

	const toggleFavorite = (eventId: string) => {
		setFavoriteEventsId((prev) => {
			if (prev.includes(eventId)) {
				return prev.filter((id) => id !== eventId);
			}
			return [...prev, eventId];
		});
	};

	const values: EventContextProps = { favoriteEventsId, toggleFavorite };

	return (
		<EventContext.Provider value={values}>{children}</EventContext.Provider>
	);
};

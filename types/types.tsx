export type RootStackParamList = {
	Home: undefined;
	EventsDetails: {
		eventId: string;
		title: string;
		description: string;
		date: string;
		time: string;
		location: string;
		isFree: boolean;
	};
};

export interface EventsDetailsRouteParams {
	eventId: string;
	title: string;
	description: string;
	date: string;
	time: string;
	location: string;
	isFree: boolean;
}

export type EventsDetailsProps = {
	route: { params: EventsDetailsRouteParams };
};

export interface Event {
	eventId: string;
	title: string;
	description: string;
	date: string; // ISO date string (YYYY-MM-DD)
	time: string; // 24h format (HH:mm)
	location: string;
	isFree: boolean;
}

export interface Category {
	categoryId: string;
	categoryName: string;
	events: Event[];
}

export interface EventsData {
	categories: Category[];
}

export interface EventWithCategory extends Event {
	categoryId: string;
	categoryName: string;
}

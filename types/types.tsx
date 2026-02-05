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

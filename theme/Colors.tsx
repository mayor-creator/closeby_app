export const COLORS = {
	/* ======================
	   BRAND
	====================== */
	brandPrimary: "#C8553D", // Burnt orange (navigation, CTAs)
	brandSecondary: "#588157", // Muted olive (filters, tags)

	/* ======================
	   SURFACES
	====================== */
	background: "#F4EDE4", // App background
	card: "#FAF3E8", // Cards, sheets, modals
	border: "#D6C9B8", // Dividers (3:1 against background)

	/* ======================
	   TEXT (WCAG SAFE)
	====================== */
	textPrimary: "#3A2E2A", // Main text (AAA on bg & card)
	textSecondary: "#6B5E57", // Metadata, subtitles (AA)
	textDisabled: "#8C7A6A", // Disabled text (AA on bg)

	/* ======================
	   ICONS & NAVIGATION
	====================== */
	iconActive: "#FAF3E8", // Active tab icon (PASS on primary)
	iconInactive: "#D6C9B8", // Inactive tab icon (PASS on primary)

	/* ======================
	   ACCENTS (LIMITED TEXT USE)
	====================== */
	accent: "#C9821F", // Darkened mustard (3:1+ on light bg)

	/* ======================
	   STATUS (TEXT + ICON SAFE)
	====================== */
	success: "#5E7F60", // Success text/icons (AA)
	error: "#9E2A2B", // Error text/icons (AA)
	favorite: "#B23A48", // Favorites / likes (AA)

	/* ======================
	   DECORATIVE ONLY
	====================== */
	muted: "#B7A99A", // Skeletons, placeholders, disabled icons ONLY

	/*
  textPrimary → anything users must rea
  textSecondary → dates, locations, categories
  accent → icons, chips, highlights (avoid paragraph text)
  muted → never text
  */
};

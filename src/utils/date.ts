/**
 * Format a date string to UK format (dd Month yyyy)
 * e.g., "12 October 2025"
 */
export function formatDateUK(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-GB', { 
		day: 'numeric', 
		month: 'long', 
		year: 'numeric' 
	});
}


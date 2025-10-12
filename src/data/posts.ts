export interface Post {
	slug: string;
	title: string;
	date: string;
	tags: string[];
	excerpt: string;
}

export const posts: Post[] = [
	{
		slug: 'migrating-to-astro',
		title: 'Migrating from Adobe Portfolio to Astro',
		date: '2025-10-12',
		tags: ['web development', 'astro', 'portfolio'],
		excerpt: 'After years on Adobe Portfolio, I have rebuilt my personal site from scratch using modern web technologies.',
	}
];


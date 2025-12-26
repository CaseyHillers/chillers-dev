import { MetadataRoute } from 'next';
import { getAllPosts } from './lib/posts';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://chillers.dev';
    const allPosts = getAllPosts();

    const posts = allPosts.map((post) => ({
        url: `${baseUrl}/posts/${post.id}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...posts,
    ];
}

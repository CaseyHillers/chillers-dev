import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'app/posts');

export interface Post {
    id: string;
    title: string;
    date: string;
    description: string;
    topics: string[];
    readingTime: string;
    content?: string;
    blueskyId?: string;
    uploaded?: string;
}

type PostFrontmatter = {
    title: string;
    date: string;
    description: string;
    blueskyId?: string;
    topics?: string[];
    uploaded?: string;
};

function getReadingTime(content: string): string {
    const words = content
        .replace(/<[^>]+>/g, ' ')
        .replace(/[^\w\s'-]/g, ' ')
        .trim()
        .split(/\s+/)
        .filter(Boolean);
    const minutes = Math.max(1, Math.ceil(words.length / 220));

    return `${minutes} min read`;
}

function normalizePost(id: string, data: PostFrontmatter, content?: string): Post {
    const topics = Array.isArray(data.topics) ? data.topics : [];

    return {
        id,
        title: data.title,
        date: data.date,
        description: data.description,
        blueskyId: data.blueskyId,
        topics,
        readingTime: getReadingTime(content ?? ''),
        content,
        uploaded: data.uploaded,
    };
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
        .filter(fileName => fileName.endsWith('.mdx'));

    return fileNames.map((fileName) => {
        return {
            id: fileName.replace(/\.mdx$/, ''),
        };
    });
}

export async function getPostData(id: string): Promise<Post> {
    const fullPath = path.join(postsDirectory, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return normalizePost(id, matterResult.data as PostFrontmatter, matterResult.content);
}

export function getAllPosts(): Post[] {
    const fileNames = fs.readdirSync(postsDirectory)
        .filter(fileName => fileName.endsWith('.mdx'));

    const allPostsData = fileNames.map((fileName) => {
        // Remove ".mdx" from file name to get id
        const id = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        return normalizePost(id, matterResult.data as PostFrontmatter, matterResult.content);
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

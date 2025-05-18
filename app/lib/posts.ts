import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'app/posts');

export interface Post {
    id: string;
    title: string;
    date: string;
    description: string;
    content?: string;
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
        .filter(fileName => fileName.endsWith('.mdx'));

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.mdx$/, ''),
            },
        };
    });
}

export async function getPostData(id: string): Promise<Post> {
    const fullPath = path.join(postsDirectory, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
        id,
        ...(matterResult.data as { title: string; date: string; description: string }),
        content: matterResult.content
    };
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

        return {
            id,
            ...(matterResult.data as { title: string; date: string; description: string }),
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
} 
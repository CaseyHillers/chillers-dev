import Link from 'next/link';
import { getPostData, getAllPostIds } from '../../lib/posts';
import { formatPostDate } from '../../lib/formatDate';
import MDXContent from '../../components/MDXContent';
import BlueskyCommentsWrapper from '../../components/BlueskyComments';

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths;
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await getPostData(id);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <Link
                    href="/"
                    className="inline-block mb-8 text-ice hover:text-ice-strong transition-colors"
                >
                    ← Back to home
                </Link>

                <article className="bg-surface border border-border rounded-lg p-8">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-ice-strong tracking-tight">
                        {post.title}
                    </h1>
                    <div className="text-muted mb-8 text-sm">
                        {formatPostDate(post.date)}
                    </div>
                    {post.content && <MDXContent content={post.content} />}
                    <BlueskyCommentsWrapper author="chillers.dev" uri={post.blueskyId} />
                </article>
            </div>
        </div>
    );
} 

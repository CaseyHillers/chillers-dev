import Link from 'next/link';
import { getPostData, getAllPostIds } from '../../lib/posts';
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
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <Link
                    href="/"
                    className="inline-block mb-8 text-blue-400 hover:text-blue-300 transition-colors"
                >
                    ← Back to home
                </Link>

                <article className="bg-gray-800 rounded-lg p-8 shadow-lg">
                    <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 tracking-tight">
                        {post.title}
                    </h1>
                    <div className="text-gray-400 mb-8 text-sm">
                        {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </div>
                    {post.content && <MDXContent content={post.content} />}
                    <BlueskyCommentsWrapper author="chillers.dev" uri={post.blueskyId} />
                </article>
            </div>
        </div>
    );
} 
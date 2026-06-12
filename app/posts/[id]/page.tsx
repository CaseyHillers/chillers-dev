import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getPostData, getAllPostIds } from '../../lib/posts';
import { formatPostDate } from '../../lib/formatDate';
import MDXContent from '../../components/MDXContent';
import BlueskyCommentsWrapper from '../../components/BlueskyComments';
import SiteHeader from '../../components/SiteHeader';

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths;
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await getPostData(id);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SiteHeader />
            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
                <Link
                    href="/"
                    className="mb-10 inline-flex items-center gap-2 rounded-md text-sm font-medium text-muted transition hover:text-ice"
                >
                    <ArrowLeft size={16} aria-hidden="true" />
                    Back to home
                </Link>

                <article>
                    <div className="max-w-3xl">
                        <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-muted">
                            <span>{formatPostDate(post.date)}</span>
                            <span aria-hidden="true">/</span>
                            <span>{post.readingTime}</span>
                        </div>
                        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ice-strong sm:text-5xl">
                            {post.title}
                        </h1>
                        <p className="mt-5 text-lg leading-8 text-muted sm:text-xl">
                            {post.description}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {post.topics.map((topic) => (
                                <span
                                    key={topic}
                                    className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted"
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 border-t border-border pt-10">
                        {post.content && <MDXContent content={post.content} />}
                    </div>
                    <BlueskyCommentsWrapper author="chillers.dev" uri={post.blueskyId} />
                </article>
            </div>
        </div>
    );
} 

import Link from 'next/link';
import { getPostData, getAllPostIds, getAllPosts } from '../../lib/posts';
import { formatPostDate } from '../../lib/formatDate';
import MDXContent from '../../components/MDXContent';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths;
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await getPostData(id);

    const allPosts = getAllPosts();
    const index = allPosts.findIndex((entry) => entry.id === id);
    const newer = index > 0 ? allPosts[index - 1] : undefined;
    const older = index >= 0 ? allPosts[index + 1] : undefined;

    const details = [
        formatPostDate(post.date),
        post.readingTime,
        post.topics.join(', '),
        post.uploaded ? `Uploaded: ${formatPostDate(post.uploaded)}` : null,
    ].filter(Boolean);

    return (
        <div className="min-h-svh bg-background text-foreground">
            <SiteHeader />
            <main className="px-margin">
                <article>
                    <header className="mx-auto max-w-[60rem] pt-12 sm:pt-20">
                        <h1
                            className={`font-display text-head font-light leading-[1.02] tracking-[-0.01em] ${
                                post.title.length > 40 ? 'title-long' : ''
                            }`}
                        >
                            {post.title}
                        </h1>
                        <p className="mt-8 max-w-[46ch] text-lead leading-snug">
                            {post.description}
                        </p>
                        <p className="mt-5 text-small text-muted">
                            {details.join(' · ')}
                        </p>
                    </header>

                    <div className="mx-auto mt-14 max-w-[42rem] sm:mt-20">
                        {post.content && <MDXContent content={post.content} />}
                    </div>
                </article>

                {newer || older ? (
                    <nav
                        aria-label="More posts"
                        className="mx-auto mt-section grid max-w-[60rem] gap-10 sm:grid-cols-2"
                    >
                        <h2 className="sr-only">More posts</h2>
                        {older ? (
                            <Link href={`/posts/${older.id}`} className="post-row block">
                                <span className="post-row-title block font-display text-lead leading-snug">
                                    {older.title}
                                </span>
                                <span className="mt-2 block text-small text-muted">Older post</span>
                            </Link>
                        ) : (
                            <span />
                        )}
                        {newer ? (
                            <Link href={`/posts/${newer.id}`} className="post-row block sm:text-right">
                                <span className="post-row-title block font-display text-lead leading-snug">
                                    {newer.title}
                                </span>
                                <span className="mt-2 block text-small text-muted">Newer post</span>
                            </Link>
                        ) : null}
                    </nav>
                ) : null}
            </main>
            <SiteFooter />
        </div>
    );
}

'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useEffect, useState } from 'react';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import 'highlight.js/styles/github-dark.css';
import PostImage from './PostImage';
import TokenUsageChart from './TokenUsageChart';
import YouTube from './YouTube';
import SubscriptionValueChart from './SubscriptionValueChart';

interface MDXContentProps {
    content: string;
}

export default function MDXContent({ content }: MDXContentProps) {
    const [mdxContent, setMdxContent] = useState<MDXRemoteSerializeResult | null>(null);

    useEffect(() => {
        const processContent = async () => {
            const mdxSource = await serialize(content, {
                mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeHighlight],
                },
            });
            setMdxContent(mdxSource);
        };
        processContent();
    }, [content]);

    if (!mdxContent) {
        return <div className="min-h-[50svh] text-muted">Loading…</div>;
    }

    return (
        <div className="prose prose-invert max-w-none text-body
            prose-headings:tracking-tight
            prose-code:bg-surface
            prose-code:px-1.5
            prose-code:py-0.5
            prose-code:before:content-none
            prose-code:after:content-none
        ">
            <MDXRemote
                {...mdxContent}
                components={{
                    // The page title is the only h1; top-level headings in a post become h2.
                    h1: (props) => <h2 {...props} />,
                    img: PostImage,
                    PostImage,
                    TokenUsageChart,
                    YouTube,
                    SubscriptionValueChart,
                }}
            />
        </div>
    );
} 

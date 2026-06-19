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
        return <div className="text-muted">Loading...</div>;
    }

    return (
        <div className="prose prose-invert prose-lg max-w-3xl
            prose-headings:tracking-tight
            prose-headings:text-foreground
            prose-p:leading-8
            prose-p:text-foreground/90
            prose-a:font-medium
            prose-a:text-ice
            hover:prose-a:text-ice-strong
            prose-strong:text-ice-strong
            prose-code:rounded
            prose-code:bg-surface
            prose-code:px-1.5
            prose-code:py-0.5
            prose-code:text-ice-strong
            prose-code:before:content-none
            prose-code:after:content-none
            prose-pre:rounded-lg
            prose-pre:border
            prose-pre:border-border
            prose-pre:bg-surface-2
            prose-pre:shadow-lg
            prose-pre:shadow-black/15
            prose-blockquote:border-l-ice
            prose-blockquote:bg-surface/50
            prose-blockquote:px-5
            prose-blockquote:py-1
            prose-blockquote:text-muted
            prose-hr:border-border
        ">
            <MDXRemote
                {...mdxContent}
                components={{
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

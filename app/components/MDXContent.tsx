'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useEffect, useState } from 'react';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import 'highlight.js/styles/github-dark.css';

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
        return <div>Loading...</div>;
    }

    return (
        <div className="prose prose-invert prose-lg max-w-none">
            <MDXRemote {...mdxContent} />
        </div>
    );
} 
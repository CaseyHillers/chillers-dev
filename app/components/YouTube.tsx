'use client';

import React from 'react';

interface YouTubeProps {
    id: string;
    title?: string;
}

export default function YouTube({ id, title = "YouTube video player" }: YouTubeProps) {
    return (
        <div className="not-prose my-6 overflow-hidden rounded-2xl border border-border bg-surface/50 shadow-md">
            <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                    className="absolute top-0 left-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${id}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </div>
    );
}

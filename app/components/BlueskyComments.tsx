'use client';

import 'bluesky-comments/bluesky-comments.css';
import { BlueskyComments } from 'bluesky-comments';

interface Props {
  uri?: string;
  author?: string;
}

export default function BlueskyCommentsWrapper({ uri, author }: Props) {
  return (
    <div className="bluesky-comments-wrapper mt-14 max-w-3xl border-t border-border pt-8">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-ice">Comments</h2>
        <BlueskyComments
            author={author}
            uri={uri}
        />
    </div>
  );
}

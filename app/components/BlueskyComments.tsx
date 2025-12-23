'use client';

import 'bluesky-comments/bluesky-comments.css';
import { BlueskyComments } from 'bluesky-comments';

interface Props {
  uri?: string;
  author?: string;
}

export default function BlueskyCommentsWrapper({ uri, author }: Props) {
  return (
    <div className="mt-12 pt-8 border-t border-gray-800 bluesky-comments-wrapper">
        <h2 className="text-2xl font-bold mb-6 text-gray-200">Comments</h2>
        <BlueskyComments
            author={author}
            uri={uri}
        />
    </div>
  );
}

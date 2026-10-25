import Link from 'next/link';

export type StripFrame = {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
    postId: string;
    postTitle: string;
};

// A sideways row of photographs from the posts, each linking to its post.
export default function PhotoStrip({ frames }: { frames: StripFrame[] }) {
    return (
        <ul
            className="strip-track flex gap-2.5 overflow-x-auto px-margin pb-4"
            aria-label="Photographs from the posts"
        >
            {frames.map((item) => (
                <li key={item.src} className="strip-frame flex-none">
                    <Link href={`/posts/${item.postId}`} className="group block">
                        <img
                            src={item.src}
                            alt={item.alt}
                            width={item.width}
                            height={item.height}
                            decoding="async"
                        />
                        <span className="mt-3 block w-0 min-w-full text-small">
                            {item.caption}
                            <span className="block text-muted transition-colors group-hover:text-accent">
                                {item.postTitle}
                            </span>
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

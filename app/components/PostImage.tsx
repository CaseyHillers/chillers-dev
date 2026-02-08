'use client';

import { useEffect, useId, useState } from 'react';
import type { ImgHTMLAttributes } from 'react';
import { createPortal } from 'react-dom';

type PostImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    caption?: string;
    zoomSrc?: string;
    'data-caption'?: string;
};

export default function PostImage({
    caption,
    zoomSrc,
    alt,
    title,
    className,
    loading,
    decoding,
    src,
    ...imgProps
}: PostImageProps) {
    const [isOpen, setIsOpen] = useState(false);
    const captionId = useId();
    const dataCaption = typeof imgProps['data-caption'] === 'string' ? imgProps['data-caption'] : undefined;
    const resolvedCaption = caption ?? dataCaption ?? title ?? alt;
    const trimmedCaption = resolvedCaption?.trim();
    const hasCaption = Boolean(trimmedCaption);
    const imageClassName = [
        'block max-w-full rounded-2xl border border-border bg-surface/60 shadow-sm transition-transform duration-300 group-hover:scale-[1.01]',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return (
        <figure className="not-prose my-6 flex flex-col items-center gap-2">
            <button
                type="button"
                className="group mx-auto inline-flex cursor-zoom-in rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ice/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={hasCaption ? `Enlarge image: ${trimmedCaption}` : 'Enlarge image'}
                onClick={() => setIsOpen(true)}
            >
                <img
                    {...imgProps}
                    src={src}
                    alt={alt ?? ''}
                    title={title}
                    loading={loading ?? 'lazy'}
                    decoding={decoding ?? 'async'}
                    className={imageClassName}
                    aria-describedby={hasCaption ? captionId : undefined}
                />
            </button>
            {hasCaption ? (
                <figcaption id={captionId} className="text-sm text-muted text-center">
                    {trimmedCaption}
                </figcaption>
            ) : null}
            {isOpen && typeof document !== 'undefined'
                ? createPortal(
                      <div
                          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
                          onPointerDown={() => setIsOpen(false)}
                          role="dialog"
                          aria-modal="true"
                      >
                          <button
                              type="button"
                              className="absolute right-5 top-5 rounded-full border border-border bg-surface/90 px-3 py-1 text-sm text-foreground shadow-lg transition hover:bg-surface"
                              onClick={() => setIsOpen(false)}
                          >
                              Close
                          </button>
                          <img
                              src={zoomSrc ?? src}
                              alt={alt ?? ''}
                              className="max-h-[90vh] max-w-[90vw] rounded-2xl border border-border bg-surface shadow-2xl"
                              onPointerDown={(event) => event.stopPropagation()}
                          />
                      </div>,
                      document.body
                  )
                : null}
        </figure>
    );
}

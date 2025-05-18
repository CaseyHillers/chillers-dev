'use client';

import React from 'react';

interface MDXWrapperProps {
    children: React.ReactNode;
}

export default function MDXWrapper({ children }: MDXWrapperProps) {
    return <>{children}</>;
} 
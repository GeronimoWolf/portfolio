'use client';

import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

// Minimal client component for rendering the serialized MDX
interface BlogPostProps {
  mdxSource: MDXRemoteSerializeResult;
}

export default function BlogPost({ mdxSource }: BlogPostProps) {
  return <MDXRemote {...mdxSource} />;
}
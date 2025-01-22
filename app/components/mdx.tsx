'use client';

import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

// Minimal client component for rendering the serialized MDX
interface CustomMDXProps {
  mdxSource: MDXRemoteSerializeResult;
}

export default function CustomMDX({ mdxSource }: CustomMDXProps) {
  return <MDXRemote {...mdxSource} />;
}
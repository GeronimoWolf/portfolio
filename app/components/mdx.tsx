'use client';

import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface CustomMDXProps {
  mdxSource: MDXRemoteSerializeResult;
}

export function CustomMDX({ mdxSource }: CustomMDXProps) {
  return <MDXRemote {...mdxSource} />;
}
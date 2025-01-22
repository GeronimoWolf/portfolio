import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import { getBlogPosts, formatDate } from 'app/blog/utils';
import { baseUrl } from 'app/sitemap';
import remarkGfm from 'remark-gfm';
import CustomMDX from 'app/components/mdx';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((p) => p.slug === params.slug);
  if (!post) return;

  const { title, publishedAt, summary: description, image } = post.metadata;
  const ogImage = image || `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: publishedAt,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: { params: { slug: string } }) {
  // 1. Fetch the correct post based on slug
  const post = getBlogPosts().find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
  }

  // 2. Serialize MDX on the server
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      // rehypePlugins: [], // Add if needed
      format: 'mdx',
    },
  });

  // 3. Return JSX rendered on the server
  return (
    <section>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />

      {/* Title */}
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>

      {/* Publication Date */}
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>

      <article className="prose">
        <CustomMDX mdxSource={mdxSource} />
      </article>
    </section>
  );
}
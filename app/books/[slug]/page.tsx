import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { getBooks } from 'app/books/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let books = getBooks()

  return books.map((book) => ({
    slug: book.slug,
  }))
}

export function generateMetadata({ params }) {
  let book = getBooks().find((book) => book.slug === params.slug)
  if (!book) {
    return
  }

  let {
    title,
    author,
    summary: description,
    image,
  } = book.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'book',
      author,
      url: `${baseUrl}/books/${book.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let book = getBooks().find((book) => book.slug === params.slug)

  if (!book) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Book',
            headline: book.metadata.title,
            author: book.metadata.author,
            description: book.metadata.summary,
            image: book.metadata.image
              ? `${baseUrl}${book.metadata.image}`
              : `/og?title=${encodeURIComponent(book.metadata.title)}`,
            url: `${baseUrl}/books/${book.slug}`,
            
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {book.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
          By {book.metadata.author}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={book.content} />
      </article>
    </section>
  )
}

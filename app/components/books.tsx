import Link from 'next/link'
import { getBooks } from 'app/books/utils'

export function BookRecommendations() {
  let allBooks = getBooks()

  return (
    <div>
      {allBooks
        .map((book) => (
          <Link
            key={book.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/books/${book.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[150px] tabular-nums">
                {book.metadata.author}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {book.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}

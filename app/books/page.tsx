import { BookRecommendations } from 'app/components/books'

export const metadata = {
  title: 'Books',
  description: 'Books I read and recommend.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Books I read and recommend</h1>
      <BookRecommendations />
    </section>
  )
}

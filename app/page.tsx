import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        Hi, I'm Geronimo Wolf
      </h1>
      <h2 className="mb-6 font-medium tracking-tight text-gray-500">
        Tech enthusiast, aspiring entrepreneur, and father.
      </h2>

      <div className="prose prose-neutral dark:prose-invert">
        <p className="mb-4">
          Welcome to my online space. Here, I share ideas and perspectives
          shaped by my work in tech. I hope
          you'll find something valuable.
        </p>

        <p className="mb-4"> Feel free to reach out through
          LinkedIn through the link below.
        </p>

        <p className="mb-4">
          Thanks for reading!
        </p>
      </div>
    </section>
  )
}

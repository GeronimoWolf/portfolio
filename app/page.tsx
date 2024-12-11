import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        Hi, I'm Geronimo Wolf
      </h1>
      <h2 className="mb-6 font-medium tracking-tight text-gray-500">
        Building in Public | Sharing the Entrepreneurial Journey
      </h2>
      
      <div className="prose prose-neutral dark:prose-invert">
        <p className="mb-4">
          {`I'm documenting my journey from zero to entrepreneur, sharing every step, 
          misstep, and lesson learned along the way. No sugar-coating, just real experiences 
          and honest insights.`}
        </p>

        <p>
            {`I'm currently in the ideation phase, exploring potential business opportunities. 
            Check out the roadmap for an overview of the different phases and 
            check out the tracker for real-time updates on my progress.`}
        </p>
      </div>
    </section>
  )
}
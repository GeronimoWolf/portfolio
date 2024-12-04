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

        <p className="mb-4">
          {`What makes this different? I'm not writing from the finish line - I'm in the trenches 
          right now, exploring business ideas, validating concepts, and building in public. You'll 
          see the whole process unfold in real-time, including:`}
        </p>

        <ul className="mb-4 list-disc pl-4">
          <li>How I generate and evaluate business ideas</li>
          <li>The methods I use to validate market opportunities</li>
          <li>My decision-making process and frameworks</li>
          <li>The tools and resources I find most valuable</li>
          <li>Regular updates on progress and setbacks</li>
        </ul>

        <p className="mb-4">
          {`Whether you're an aspiring entrepreneur, someone curious about starting a business, 
          or just interested in following along, you'll find practical insights and real-world 
          experiences here. I hope you find it helpful.`}
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
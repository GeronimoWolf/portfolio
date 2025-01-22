import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        Hi, I'm Geronimo Wolf
      </h1>
      <h2 className="mb-6 font-medium tracking-tight text-gray-500">
        Sharing Ideas and Insights
      </h2>
      
      <div className="prose prose-neutral dark:prose-invert">
        <p className="mb-4">
          {`Welcome to my online space. Here, I share ideas and perspectives 
          shaped by my work in tech, my journey into entrepreneurship, 
          and the occasional moments of quiet reflection that life inspires.`}
        </p>
        <p className="mb-4">
          {`This is not a place for quick thrills or flashy content (as you can 
          probably tell by the lack of styling). It's a calm corner for thoughtful 
          exploration - whether about tech innovations, lessons learned from building 
          something new, or simple reflections on balancing work and family life.`}
        </p>

        <p className="mb-4">
          {`If you're looking for grounded insights or practical ideas, I hope 
          you'll find value in what's shared here. Feel free to browse, reflect, 
          and reach out through LinkedIn if you feel like it.`}
        </p>

        <p className="mb-4">
          {`Thanks for stopping by.`}
        </p>

        <p className="mb-4">
          {`- Geronimo`}
        </p>
      </div>
    </section>
  )
}
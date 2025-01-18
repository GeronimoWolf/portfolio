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
          {`Welcome! This is where I write about the things that catch my interest. 
          Technology? Definitely. Entrepreneurship? Why not. The sigh 
          of relief when I realise my next laundry load is 
          just a few blankets, not 57 pieces of small human clothes 
          that require Olympic-level folding skills?
          Still figuring it out.`}
        </p>
        <p className="mb-4">
          {`Think of this as my little corner of the internet, where I share 
          thoughts and ideas—some insightful, some completely random, some 
          ridiculous, and some that will probably make you wonder if I've 
          been staring at my screen for too long. The answer to the latter 
          is probably yes.`}
        </p>

        <p className="mb-4">
          {`Whether you're here for tech talk, entrepreneurial experiments, 
          or just a reason to avoid doing your own laundry (totally valid), 
          I hope you find something interesting, useful and/or entertaining.`}
        </p>

        <p className="mb-4">
          {`Thanks for visiting! Grab a coffee, explore the posts, and feel free 
          to share your thoughts. I'll set up an email soon, but in the meantime, 
          let's connect on LinkedIn (see link below).`}
        </p>

        <p className="mb-4">
          {`- Geronimo`}
        </p>
      </div>
    </section>
  )
}
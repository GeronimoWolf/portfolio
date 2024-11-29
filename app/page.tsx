import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Geronimo Wolf
      </h1>
      <p className="mb-4">
        {`I’m a lead consultant, developer, and aspiring entrepreneur with a passion for 
        technology and building meaningful solutions. My journey so far has spanned 
        cloud architecture, data solutions, and experimenting with SaaS product prototypes. 
        I believe in keeping things efficient, scalable, and simple - qualities reflected 
        in this website.`}
      </p>
      <p className="mb-4">
        {`This site marks the start of a new chapter for me. It’s where I’ll document my 
        journey of exploring what it takes to start and grow a business. From brainstorming 
        ideas to learning through missteps and celebrating those _“aha”_ moments, I hope 
        to share something useful - not just for myself but for others on similar paths.`}
      </p>
      <p className="mb-4">
        {`Thanks for stopping by. Feel free to connect with me on LinkedIn or dive into the 
        blog to join me on this entrepreneurial adventure!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

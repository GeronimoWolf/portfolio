import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Geronimo Wolf
      </h1>
      <p className="mb-4">
        {`I’m a lead consultant, developer and aspiring entrepreneur with a passion for 
        technology and building businesses. My journey so far includes cloud architecture, 
        data solutions and prototyping SaaS products. I strive to keep things efficient, 
        scalable and simple — like this website.`}
      </p>
      <p className="mb-4">
        {`This site is a collection of my thoughts, projects and experiences as I explore 
        what it takes to start and grow a business. From brainstorming ideas to turning them 
        into reality, I’ll share the lessons learned along the way — successes and missteps 
        alike — because every step shapes the journey.`}
      </p>
      <p className="mb-4">
        {`Thanks for stopping by. Feel free to reach out through LinkedIn or dive into the 
        blog to join me on this entrepreneurial adventure!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

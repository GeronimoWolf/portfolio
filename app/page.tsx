import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        Hi, I'm Geronimo Wolf
      </h1>
      <h2 className="mb-6 font-medium tracking-tight text-gray-500">
        Documenting My Journey to Build a Business
      </h2>
      <p className="mb-4">
        {`Welcome to my site, where I share the process of building a business from the ground up. 
        This is about taking an idea and turning it into something real - one step at a time. Along 
        the way, I’ll document what works, what doesn’t, and the lessons learned.`}
      </p>
      <p className="mb-4">
        {`Here’s the roadmap I’m following:`}
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>Identifying a business idea</li>
        <li>Validating the idea</li>
        <li>Creating a business</li>
        <li>Building a business</li>
        <li>Launching a business</li>
        <li>Growing a business</li>
      </ul>
      <p className="mb-4">
        {`Each step brings its own challenges, and I’ll be sharing the wins, missteps, and insights 
        as I go. My goal is to provide something useful for others who are also exploring 
        entrepreneurship or even just curious about the process.`}
      </p>
      <p className="mb-4">
        {`Feel free to explore the blog for updates and reflections. Thanks for stopping by and let’s 
        see where this journey leads!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
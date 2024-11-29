import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Geronimo Wolf,
      </h1>
      <p className="mb-4">
        {`I’m a lead consultant, developer and all-around tech enthusiast with a passion for
        technology and entrepreneurship. My work so far spans cloud architecture, data
        solutions and building SaaS products from the ground up. I’m all about keeping 
        things efficient, scalable, and simple—just like thiswebsite.`}
      </p>
      <p className="mb-4">
        {`This site is a collection of my projects, thoughts and ideas as I navigate
        the exciting (and sometimes chaotic) world of technology and entrepreneurship.
        It’s also a space where I share what I’ve learned along the way — the good and 
        the bad because let’s face it, mistakes make for the best stories. Thanks for 
        stopping by — feel free to reach out or dive into the blog!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

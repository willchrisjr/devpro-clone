import Link from 'next/link';

type BlogPost = {
  date: string;
  title: string;
  description: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    date: "November 28, 2022",
    title: "What is a website template",
    description:
      "A website template is a pre-designed website that can be customized to suit your needs. In this post, we'll take a look at what a website template is and why it can be a great creative outlet for writers",
    slug: "what-is-a-website-template",
  },
  {
    date: "September 2, 2022",
    title: "What is a blog anyway",
    description:
      "A blog is a website that is updated regularly with new content. It is a great way to share your thoughts and ideas with the world. In this blog post, we will discuss what a blog is and how to create one.",
    slug: "what-is-a-blog-anyway",
  },
];

export default function BlogsPage() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-10 md:mt-20 relative">
      <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
        All of my <span className="text-cyan-500">Technical Knowledge</span> in
        one place
      </h1>
      <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
        I'm obsessed with writing bad code. I'm also obsessed with writing. Here, I write about my
        experiences with code and the things I've learned along the way.
      </p>

      <div className="mt-20">
        <div className="flex max-w-3xl flex-col space-y-16">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blogs/${post.slug}`}
              className="relative md:p-8 hover:bg-zinc-800/20 rounded-lg transition-colors"
            >
              <div className="relative z-50">
                <small className="md:border-l md:border-zinc-700 md:pl-4 text-zinc-500 block">
                  {post.date}
                </small>
                <h2 className="text-zinc-200 font-bold text-lg mt-4">
                  {post.title}
                </h2>
                <p className="text-zinc-200 font-normal text-sm mt-4 leading-loose max-w-4xl">
                  {post.description}
                </p>
                <p className="text-cyan-500 text-sm mt-6 block">Read More</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

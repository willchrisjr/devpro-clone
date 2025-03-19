import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type BlogPost = {
  date: string;
  title: string;
  description: string;
  content: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    date: "November 28, 2022",
    title: "What is a website template",
    description:
      "A website template is a pre-designed website that can be customized to suit your needs. In this post, we'll take a look at what a website template is and why it can be a great creative outlet for writers",
    slug: "what-is-a-website-template",
    content: `
      <p>A website template is a pre-designed website layout that includes placeholder content which can be customized by the user. Templates provide a framework for building a website without having to create everything from scratch. They typically include pre-designed pages, navigation menus, and styling, making it easier for users to create a professional-looking website.</p>

      <h2>Why Use a Website Template?</h2>

      <p>Website templates offer many advantages, especially for writers and content creators:</p>

      <ul>
        <li><strong>Time-Saving</strong>: Instead of learning how to code or hiring a web developer, templates allow you to get your website up and running quickly.</li>
        <li><strong>Cost-Effective</strong>: Templates are much less expensive than custom-designed websites.</li>
        <li><strong>Professional Design</strong>: Templates are created by professional designers, ensuring your website looks polished and modern.</li>
        <li><strong>Focus on Content</strong>: With the design already taken care of, you can focus on what matters most - your writing and content.</li>
      </ul>

      <h2>Templates as a Creative Outlet for Writers</h2>

      <p>For writers, a website template can serve as a powerful creative outlet. Here's why:</p>

      <ol>
        <li>
          <strong>Personal Branding</strong>: A website gives writers a platform to establish their unique voice and brand. Templates allow customization of colors, fonts, and layouts that match your writing style and personality.
        </li>
        <li>
          <strong>Portfolio Showcase</strong>: Templates often include portfolio sections where writers can showcase their published work, making it easy for potential clients or publishers to browse your writing samples.
        </li>
        <li>
          <strong>Blog Integration</strong>: Most templates include blog functionality, allowing writers to regularly publish content directly on their site, building an audience over time.
        </li>
        <li>
          <strong>Creative Freedom</strong>: While templates provide structure, they also allow for creative expression through customization. Writers can experiment with different layouts and visual elements to create a site that truly represents their work.
        </li>
      </ol>

      <h2>Getting Started with Website Templates</h2>

      <p>If you're a writer looking to create a website using a template, here are some steps to get started:</p>

      <ol>
        <li>Identify your goals for the website (showcase portfolio, sell books, build a following)</li>
        <li>Research platforms that offer templates (WordPress, Squarespace, Wix)</li>
        <li>Choose a template that aligns with your writing style and goals</li>
        <li>Customize the template with your brand colors, fonts, and images</li>
        <li>Add your content, focusing on quality writing that showcases your abilities</li>
        <li>Launch your site and share it with your network</li>
      </ol>

      <p>Website templates offer writers an accessible way to establish an online presence without technical barriers. By leveraging pre-designed layouts, writers can focus on creating compelling content while still having a professional, customized platform to share their work with the world.</p>
    `
  },
  {
    date: "September 2, 2022",
    title: "What is a blog anyway",
    description:
      "A blog is a website that is updated regularly with new content. It is a great way to share your thoughts and ideas with the world. In this blog post, we will discuss what a blog is and how to create one.",
    slug: "what-is-a-blog-anyway",
    content: `
      <p>A blog, short for "weblog," is an online platform where individuals or organizations regularly publish content in a conversational, often informal style. What distinguishes blogs from other websites is their chronological organization, with the newest content appearing first, and their focus on regular updates.</p>

      <h2>Key Characteristics of Blogs</h2>

      <p>Blogs have several defining features that set them apart from other types of websites:</p>

      <ul>
        <li><strong>Chronological Organization</strong>: Posts are typically displayed in reverse chronological order, with the newest content at the top.</li>
        <li><strong>Regular Updates</strong>: Unlike static websites, blogs are regularly updated with new content.</li>
        <li><strong>Conversational Tone</strong>: Blog writing often adopts a personal, conversational style that engages directly with readers.</li>
        <li><strong>Comments Section</strong>: Most blogs allow readers to leave comments, creating a space for discussion and community building.</li>
        <li><strong>Categories and Tags</strong>: Content is organized using categories and tags to make navigation easier for readers.</li>
      </ul>

      <h2>Types of Blogs</h2>

      <p>There are many different types of blogs, including:</p>

      <ol>
        <li><strong>Personal Blogs</strong>: These share the author's thoughts, experiences, and interests.</li>
        <li><strong>Professional Blogs</strong>: These establish thought leadership and expertise in a particular field.</li>
        <li><strong>Corporate Blogs</strong>: Companies use these to share updates, industry insights, and connect with customers.</li>
        <li><strong>Niche Blogs</strong>: These focus on specific topics like food, travel, technology, or fitness.</li>
        <li><strong>News Blogs</strong>: These provide commentary and analysis on current events.</li>
      </ol>

      <h2>Benefits of Blogging</h2>

      <p>Starting a blog can offer numerous benefits:</p>

      <ul>
        <li><strong>Self-Expression</strong>: Blogs provide a platform to share your thoughts, ideas, and perspectives.</li>
        <li><strong>Skill Development</strong>: Regular blogging improves writing, communication, and digital marketing skills.</li>
        <li><strong>Community Building</strong>: Blogs can connect you with like-minded individuals and create a community around shared interests.</li>
        <li><strong>Career Opportunities</strong>: A successful blog can lead to speaking engagements, book deals, or consulting opportunities.</li>
        <li><strong>Income Generation</strong>: Monetized blogs can generate income through advertising, sponsored content, or product sales.</li>
      </ul>

      <h2>How to Start a Blog</h2>

      <p>Creating a blog is easier than ever. Here's a simple process to get started:</p>

      <ol>
        <li><strong>Choose a Topic</strong>: Select a subject you're passionate about and knowledgeable in.</li>
        <li><strong>Select a Platform</strong>: Popular options include WordPress, Blogger, Medium, or Squarespace.</li>
        <li><strong>Pick a Domain Name</strong>: Choose a memorable domain name that reflects your blog's content.</li>
        <li><strong>Design Your Blog</strong>: Select a template and customize it to match your style.</li>
        <li><strong>Create Essential Pages</strong>: Add an About page, Contact page, and Privacy Policy at minimum.</li>
        <li><strong>Write Your First Posts</strong>: Create 3-5 initial posts before launching to give new visitors content to explore.</li>
        <li><strong>Establish a Posting Schedule</strong>: Consistency is key to building an audience.</li>
      </ol>

      <h2>Blogging Best Practices</h2>

      <p>To create a successful blog, keep these best practices in mind:</p>

      <ul>
        <li>Know your audience and write content that addresses their interests and needs</li>
        <li>Use engaging headlines that capture attention</li>
        <li>Include visuals like images, infographics, and videos to break up text</li>
        <li>Optimize for search engines with relevant keywords and meta descriptions</li>
        <li>Promote your blog posts on social media and other channels</li>
        <li>Engage with readers who leave comments</li>
        <li>Track your performance using analytics to understand what content resonates most</li>
      </ul>

      <p>Blogs have evolved significantly since their inception in the late 1990s, but they remain a powerful medium for sharing ideas, building communities, and establishing expertise. Whether you're blogging for personal fulfillment or professional advancement, starting a blog can open up a world of opportunities for connection and growth.</p>
    `
  }
];

// Generate metadata for the page
export function generateMetadata({ params }: { slug: string }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} | Tyler Durden's Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Tyler Durden'],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-8 mt-10 md:mt-20 relative">
      <Link
        href="/blogs"
        className="inline-flex items-center text-sm text-cyan-500 mb-8 hover:text-cyan-400 transition-colors"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 mr-2 rotate-180"
        >
          <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
        </svg>
        Back to all blogs
      </Link>

      <small className="md:border-l md:border-zinc-700 md:pl-4 text-zinc-500 block">
        {post.date}
      </small>

      <h1 className="font-bold text-3xl md:text-4xl mt-4 text-zinc-50">
        {post.title}
      </h1>

      <div className="mt-12 prose prose-invert prose-zinc max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}

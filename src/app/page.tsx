import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-10 md:mt-20 relative">
      {/* Hero Section */}
      <div>
        <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
          I'm a software engineer that
          <br />
          rarely <span className="text-cyan-500">writes code</span>.
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
          Meet Manu Arora, the self-proclaimed code wizard who can turn caffeine into beautiful
          websites. His passion for building clean and functional designs is only rivaled by his
          passion for finding the perfect GIF to express his excitement.
        </p>

        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-4 md:leading-loose tracking-wide">
          Building <Link href="https://algochurn.com" className="text-cyan-500 underline">Algochurn</Link> and <Link href="https://aceternity.com" className="text-cyan-500 underline">Aceternity</Link> when I'm not working on my day job.
        </p>
      </div>

      {/* Work Experience Section */}
      <div className="mt-20">
        <h2 className="font-bold text-2xl md:text-3xl text-zinc-50">Work Experience</h2>
        <p className="text-zinc-400 text-sm md:text-base mt-4">
          I switch a lot of companies. It's mostly about the culture.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <button className="bg-zinc-800 p-4 rounded-lg flex items-center space-x-2 border border-zinc-700">
            <Image
              src="https://ext.same-assets.com/3596063415/849522504.png"
              alt="Apple"
              width={16}
              height={16}
              className="mr-2"
            />
            <span className="text-zinc-100">Apple</span>
          </button>
          <button className="bg-zinc-800/50 p-4 rounded-lg flex items-center space-x-2">
            <span className="text-zinc-400">Google</span>
          </button>
          <button className="bg-zinc-800/50 p-4 rounded-lg flex items-center space-x-2">
            <span className="text-zinc-400">Microsoft</span>
          </button>
          <button className="bg-zinc-800/50 p-4 rounded-lg flex items-center space-x-2">
            <span className="text-zinc-400">Netflix</span>
          </button>
        </div>

        <div className="mt-10 bg-zinc-800/30 rounded-lg p-6 border border-zinc-700/50">
          <h3 className="text-xl font-medium text-zinc-50">Senior Software Engineer @ Apple</h3>
          <p className="text-zinc-400 text-sm mt-2">Jan 2021 - Jun 2021</p>
          <p className="text-zinc-400 text-sm mt-1">Cupertino, CA</p>

          <ul className="mt-6 space-y-4">
            <li className="flex items-start space-x-3 text-zinc-300">
              <span className="text-cyan-500 mt-1">•</span>
              <p>Worked on the Apple Music team</p>
            </li>
            <li className="flex items-start space-x-3 text-zinc-300">
              <span className="text-cyan-500 mt-1">•</span>
              <p>Increased the revenue of the company from $80 billion to $1 Trillion</p>
            </li>
            <li className="flex items-start space-x-3 text-zinc-300">
              <span className="text-cyan-500 mt-1">•</span>
              <p>Built a new feature that allowed users to listen to music while they were sleeping</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-20">
        <h2 className="font-bold text-2xl md:text-3xl text-zinc-50">I've been building a <span className="text-cyan-500">lot of things</span></h2>
        <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-2xl">
          Come explore the fruits of my labor, from small experiments to full-blown web
          applications, each project showcases my love for coding and design.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Algochurn",
              description: "A web app that allows users to practice for front-end and UI interviews.",
              image: "https://ext.same-assets.com/2184761225/849522504.png",
              link: "https://algochurn.com"
            },
            {
              title: "Aceternity",
              description: "A web design and development agency that gets the job done. Somehow.",
              image: "https://ext.same-assets.com/133179815/849522504.png",
              link: "https://aceternity.com"
            },
            {
              title: "Tailwind Master Kit",
              description: "Buy premium tailwind components and templates for your next project.",
              image: "https://ext.same-assets.com/3388315378/849522504.png",
              link: "https://tailwindmasterkit.com"
            }
          ].map((project, index) => (
            <div key={index} className="bg-zinc-800/30 rounded-lg overflow-hidden border border-zinc-700/50 project-card">
              <Image
                src={project.image}
                width={500}
                height={300}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
                <p className="text-zinc-400 text-sm mt-2">{project.description}</p>

                <div className="mt-4 flex space-x-3">
                  <div className="text-zinc-500 p-1.5 rounded-full bg-zinc-800/70">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                      <path d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4779 10.2794 11.496 9.3117C10.7245 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="text-zinc-500 p-1.5 rounded-full bg-zinc-800/70">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                      <path d="M1.90321 7.2932C1.90321 10.4824 4.48223 13.0614 7.67143 13.0614C10.8606 13.0614 13.4396 10.4824 13.4396 7.2932C13.4396 4.10401 10.8606 1.52499 7.67143 1.52499C4.48223 1.52499 1.90321 4.10401 1.90321 7.2932ZM2.80782 7.2932C2.80782 4.60292 4.98116 2.42958 7.67143 2.42958C10.3617 2.42958 12.535 4.60292 12.535 7.2932C12.535 9.98348 10.3617 12.1568 7.67143 12.1568C4.98116 12.1568 2.80782 9.98348 2.80782 7.2932Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      <path d="M13.8222 2.18221C13.8222 2.61305 13.4725 2.96272 13.0417 2.96272C12.6108 2.96272 12.2611 2.61305 12.2611 2.18221C12.2611 1.75137 12.6108 1.4017 13.0417 1.4017C13.4725 1.4017 13.8222 1.75137 13.8222 2.18221Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div className="text-zinc-500 p-1.5 rounded-full bg-zinc-800/70">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                      <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1868 5.30335 11.8574 5.71638 11.6732C5.78225 11.205 5.96962 10.8757 6.17658 10.7043C4.56675 10.5311 2.87415 9.89313 2.87415 7.12763C2.87415 6.32807 3.15677 5.67103 3.62053 5.15174C3.54576 4.96979 3.29697 4.2392 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.2392 11.4538 4.96979 11.379 5.15174C11.8437 5.67103 12.1245 6.32807 12.1245 7.12763C12.1245 9.9003 10.4292 10.5292 8.81452 10.6978C9.07444 10.9099 9.30633 11.3326 9.30633 11.9819C9.30633 12.8985 9.29742 13.7833 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="text-zinc-500 p-1.5 rounded-full bg-zinc-800/70">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                      <path d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00002 2.49999 2.00002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyan-500 flex items-center"
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2">
                      <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                    View Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contributions Section */}
      <div className="mt-20">
        <h2 className="font-bold text-2xl md:text-3xl text-zinc-50">Latest contributions to <span className="text-cyan-500">open source</span></h2>
        <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-2xl">
          I love contributing to open source projects. Here are some of my recent contributions.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "react-code-editor",
              description: "Build your own code editor that compiles and runs 40+ programming languages.",
              stars: 158,
              forks: 57
            },
            {
              title: "simple-developer-portfolio-website",
              description: "A simple portfolio for developers to showcase their skills and projects. Blog and tutorial at fre...",
              stars: 272,
              forks: 116
            },
            {
              title: "devmedium",
              description: "A Dev.to & Medium like blogging platform with custom usernames in Next.js",
              stars: 7,
              forks: 1
            }
          ].map((repo, index) => (
            <div key={index} className="bg-zinc-800/30 rounded-lg p-6 border border-zinc-700/50 project-card">
              <h3 className="text-lg font-semibold text-zinc-100">{repo.title}</h3>
              <p className="text-zinc-400 text-sm mt-2 min-h-[50px]">{repo.description}</p>

              <div className="mt-6 flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-zinc-500" height="1em" width="1em">
                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                  </svg>
                  <span className="text-zinc-500 text-sm">{repo.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-zinc-500" height="1em" width="1em">
                    <path d="M752 100c-61.8 0-112 50.2-112 112 0 47.7 29.9 88.5 72 104.6v27.6L512 601.4 312 344.2v-27.6c42.1-16.1 72-56.9 72-104.6 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 50.6 33.8 93.5 80 107.3v34.4c0 9.7 3.3 19.3 9.3 27L476 672.3v33.6c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-33.6l226.7-291.6c6-7.7 9.3-17.3 9.3-27v-34.4c46.2-13.8 80-56.7 80-107.3 0-61.8-50.2-112-112-112zM224 212a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm336 600a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm192-552a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
                  </svg>
                  <span className="text-zinc-500 text-sm">{repo.forks}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/contributions" className="text-cyan-500 inline-flex items-center">
            <span>View all GitHub contributions</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="mt-20">
        <h2 className="font-bold text-2xl md:text-3xl text-zinc-50">
          Latest blog posts
        </h2>
        <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-2xl">
          I write about my experiences with code and the things I've learned along the way.
        </p>

        <div className="mt-10 space-y-10">
          {[
            {
              date: "November 28, 2022",
              title: "What is a website template",
              description: "A website template is a pre-designed website that can be customized to suit your needs. In this post, we'll take a look at what a website template is and why it can be a great creative outlet for writers",
              link: "/blogs/what-is-a-website-template"
            },
            {
              date: "September 2, 2022",
              title: "What is a blog anyway",
              description: "A blog is a website that is updated regularly with new content. It is a great way to share your thoughts and ideas with the world. In this blog post, we will discuss what a blog is and how to create one.",
              link: "/blogs/what-is-a-blog-anyway"
            }
          ].map((post, index) => (
            <Link
              key={index}
              href={post.link}
              className="relative block md:p-8 hover:bg-zinc-800/20 rounded-lg transition-colors"
            >
              <div className="relative z-50">
                <small className="md:border-l md:border-zinc-700 md:pl-4 text-zinc-500 block">
                  {post.date}
                </small>
                <h3 className="text-zinc-200 font-bold text-lg mt-4">
                  {post.title}
                </h3>
                <p className="text-zinc-200 font-normal text-sm mt-4 leading-loose max-w-4xl">
                  {post.description}
                </p>
                <p className="text-cyan-500 text-sm mt-6 block">Read More</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Uses Section */}
      <div className="mt-20 mb-20">
        <h2 className="font-bold text-2xl md:text-3xl text-zinc-50">
          Uses
        </h2>
        <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-2xl">
          Here's what I use on a daily basis for work and personal projects.
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-cyan-500">16 Inch M2 MacBook Pro</h3>
            <p className="text-zinc-300 text-sm mt-2">
              My main machine for development that I've been using for over 6 months now. Such a beast of a machine. I love it.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-cyan-500">iPad Pro 12.9</h3>
            <p className="text-zinc-300 text-sm mt-2">
              Overrated in my opinion. I use it for reading books and watching movies. I don't use it for development.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-cyan-500">Keychron K2</h3>
            <p className="text-zinc-300 text-sm mt-2">
              My main keyboard for development. I love the clicky keys and the compact size. I use it with a Logitech MX Master 3 mouse.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-cyan-500">Logitech MX Master 3</h3>
            <p className="text-zinc-300 text-sm mt-2">
              My main mouse for development. I love the scroll wheel and the thumb buttons. I use it with a Keychron K2 keyboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

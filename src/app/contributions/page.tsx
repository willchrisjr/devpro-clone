import Link from "next/link";

type Repository = {
  title: string;
  description: string;
  stars: number;
  forks: number;
  link: string;
};

const repositories: Repository[] = [
  {
    title: "react-code-editor",
    description: "Build your own code editor that compiles and runs 40+ programming languages.",
    stars: 158,
    forks: 57,
    link: "https://github.com/manuarora700/react-code-editor"
  },
  {
    title: "simple-developer-portfolio-website",
    description: "A simple portfolio for developers to showcase their skills and projects. Blog and tutorial at fre...",
    stars: 272,
    forks: 116,
    link: "https://github.com/manuarora700/simple-developer-portfolio-website"
  },
  {
    title: "devmedium",
    description: "A Dev.to & Medium like blogging platform with custom usernames in Next.js",
    stars: 7,
    forks: 1,
    link: "https://github.com/manuarora700/devmedium"
  },
  {
    title: "manuarora.in",
    description: "Personal website built using Next.js & TailwindCSS.",
    stars: 53,
    forks: 17,
    link: "https://github.com/manuarora700/manuarora.in"
  },
  {
    title: "sendgrid-contact-form",
    description: "A working contact form integrated with SendGrid for your Nextjs project. Blog live on freeCodeCamp.",
    stars: 39,
    forks: 20,
    link: "https://github.com/manuarora700/sendgrid-contact-form"
  },
  {
    title: "integrate-payments",
    description: "Integrate payments with Next.js, TailwindCSS, and Razorpay. Blog live on freeCodeCamp.",
    stars: 30,
    forks: 12,
    link: "https://github.com/manuarora700/integrate-payments"
  },
  {
    title: "tictactoe",
    description: "An Angular based Tic Tac Toe game. Learning Angular, Firebase and PWA",
    stars: 3,
    forks: 0,
    link: "https://github.com/manuarora700/tictactoe"
  },
  {
    title: "hashnode-github-backup",
    description: "Take backup of your hashnode blogs with the Hashnode and GitHub API.",
    stars: 1,
    forks: 0,
    link: "https://github.com/manuarora700/hashnode-github-backup"
  },
  {
    title: "100-days-interview-preparation",
    description: "100 Days of DS Algo for interview preparation (C++ and Javascript)",
    stars: 8,
    forks: 2,
    link: "https://github.com/manuarora700/100-days-interview-preparation"
  },
  {
    title: "javascript-interview-questions",
    description: "List of 1000 JavaScript Interview Questions",
    stars: 2,
    forks: 0,
    link: "https://github.com/manuarora700/javascript-interview-questions"
  },
  {
    title: "react-onrender",
    description: "Hosting react apps on Render with automatic PR previews",
    stars: 1,
    forks: 0,
    link: "https://github.com/manuarora700/react-onrender"
  },
  {
    title: "create-react-app",
    description: "create-react-app deployed on Render",
    stars: 1,
    forks: 0,
    link: "https://github.com/manuarora700/create-react-app"
  }
];

export default function ContributionsPage() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-10 md:mt-20 relative">
      <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
        Committing Code and Crimes Against <span className="text-cyan-500">Open Source World</span>
      </h1>
      <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
        A place where you can witness my caffeinated coding adventures and see just how much
        coffee it takes to fuel my commits. from my first "Hello World" to my latest breakthrough,
        and everything in between.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {repositories.map((repo, index) => (
          <a
            key={index}
            href={repo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-800/30 rounded-lg p-6 border border-zinc-700/50 project-card hover:bg-zinc-800/50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-zinc-100">{repo.title}</h3>
            <p className="text-zinc-400 text-sm mt-2 min-h-[60px]">{repo.description}</p>

            <div className="mt-6 flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="text-zinc-500"
                  height="1em"
                  width="1em"
                >
                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                </svg>
                <span className="text-zinc-500 text-sm">{repo.stars}</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="text-zinc-500"
                  height="1em"
                  width="1em"
                >
                  <path d="M752 100c-61.8 0-112 50.2-112 112 0 47.7 29.9 88.5 72 104.6v27.6L512 601.4 312 344.2v-27.6c42.1-16.1 72-56.9 72-104.6 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 50.6 33.8 93.5 80 107.3v34.4c0 9.7 3.3 19.3 9.3 27L476 672.3v33.6c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-33.6l226.7-291.6c6-7.7 9.3-17.3 9.3-27v-34.4c46.2-13.8 80-56.7 80-107.3 0-61.8-50.2-112-112-112zM224 212a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm336 600a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm192-552a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
                </svg>
                <span className="text-zinc-500 text-sm">{repo.forks}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://github.com/manuarora700"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 border border-zinc-700 rounded-lg bg-zinc-800 text-zinc-100 text-sm hover:bg-zinc-700/70 transition-colors"
        >
          View all on GitHub
        </a>
      </div>
    </div>
  );
}

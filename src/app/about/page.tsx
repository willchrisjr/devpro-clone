import Image from 'next/image';
import Link from 'next/link';

type TimelineItem = {
  year: string;
  events: string[];
};

const timelineData: TimelineItem[] = [
  {
    year: "2023",
    events: [
      "Building a new startup, this time it's going to be a big one",
      "Started writing blogs as a daily habit. Won the nobel prize for literature",
      "My brother went on to pursue a career in music, he's now a famous singer"
    ]
  },
  {
    year: "2022",
    events: [
      "Bought a new M2 chip macbook pro wow this is crazy!",
      "Broke the chip as soon as I got it, had to buy a new one",
      "Bought a new M2 chip macbook pro and started living on the streets."
    ]
  },
  {
    year: "2021",
    events: [
      "Won the interstate merathon, died 4 times on the way.",
      "Built a side project to help the people of my country win the war against covid",
      "Started a podcast with my brother, we talk about the latest tech news"
    ]
  },
  {
    year: "2020",
    events: [
      "Back at it again, this time joined facebook as a software engineer",
      "Went on to jump right in the metaverse, and joined Oculus as a software engineer",
      "Champion of international tetris competition held between me and my brother"
    ]
  },
  {
    year: "2019",
    events: [
      "Mid life crisis and decided to change career",
      "Went on to do a Masters in Data Science",
      "Ended up owning a farm and a small business"
    ]
  },
  {
    year: "2018",
    events: [
      "Graduate with a Bachelor of Mathematics",
      "Graduate with a Bachelor of Computer Science",
      "Graduate with a Bachelor of Statistics"
    ]
  }
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-10 md:mt-20 relative">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
        <div className="flex-1">
          <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
            Hey! I'm <span className="text-cyan-500">Tyler Durden</span> and I'm a
            <br />full stack soap engineer.
          </h1>

          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
            I've been obsessed with technology ever since I was a kid. When I wasn't taking apart my
            family's computer (sorry, mom), I was teaching myself how to code. Fast forward a few
            years, and now I'm a full-fledged code ninja with an insatiable thirst for creating beautiful
            websites and functional applications.
          </p>

          <div className="flex space-x-4 mt-6">
            <a
              href="https://twitter.com/mannupaaji"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1.2em"
                width="1.2em"
              >
                <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/manuarora28/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1.2em"
                width="1.2em"
              >
                <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/manuarora700"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1.2em"
                width="1.2em"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg>
            </a>
          </div>

          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
            When I'm not busy slaying bugs and writing code, I'm usually busy indulging in my two
            favorite hobbies: hot sauce and dad jokes. I firmly believe that a good laugh and a dash
            of hot sauce can fix just about anything, including bugs in my code (okay, maybe not that last part).
          </p>
        </div>

        <div className="md:w-1/3">
          <Image
            src="https://ext.same-assets.com/1402751420/849522504.png"
            alt="Tyler Durden"
            width={300}
            height={300}
            className="rounded-xl animate-float"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-10">Here's a timeline of what I've been upto</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 w-0.5 h-full bg-cyan-500/30"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className="relative pl-8">
                {/* Timeline dot */}
                <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-cyan-500"></div>

                <div>
                  <h3 className="text-xl font-medium text-zinc-50">{item.year}</h3>
                  <ul className="mt-4 space-y-4">
                    {item.events.map((event, eventIndex) => (
                      <li key={eventIndex} className="flex items-start space-x-3 text-zinc-300">
                        <span className="text-cyan-500 mt-1">•</span>
                        <p>{event}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';

type Event = {
  platform: string;
  title: string;
  description: string;
  videoLink: string;
  imageUrl: string;
};

const events: Event[] = [
  {
    platform: "codementor.io",
    title: "Components Of A Great Portfolio Website",
    description: "I talk about how to create a targeted website to land more job interviews and freelance clients with all the other things that matter. Hosted on codementor.",
    videoLink: "https://www.youtube.com/watch?v=viXpJ5Xwtfs",
    imageUrl: "https://ext.same-assets.com/2033360324/849522504.jpeg"
  },
  {
    platform: "roc8.careers",
    title: "Crafting The Perfect Portfolio Website For Developers",
    description: "Talked about how to effectively utilise a portfolio website to put yourself in the best position to win.",
    videoLink: "https://www.youtube.com/watch?v=yKVCl1jFkQQ",
    imageUrl: "https://ext.same-assets.com/1448762753/849522504.png"
  },
  {
    platform: "Youtube",
    title: "How To Use Algochurn To Clear Technical Interviews With Ease.",
    description: "Algochurn is a free resource that helps front-end developers practice machine coding questions. Here I talk about how to effectively make use of Algochurn.",
    videoLink: "https://www.youtube.com/watch?v=sZA-WrS39KI&t=19s",
    imageUrl: "https://ext.same-assets.com/1526659054/849522504.png"
  },
  {
    platform: "Youtube",
    title: "How To Implement Debouncing In React.",
    description: "Debouncing is a method of preventing a function from being invoked too often. In this video, I talk about how to create a custom debounce function from scratch.",
    videoLink: "https://www.youtube.com/watch?v=uncrKqVtgrc",
    imageUrl: "https://ext.same-assets.com/3334179078/849522504.png"
  }
];

export default function EventsPage() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-10 md:mt-20 relative">
      <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
        I speak at conferences about
        <br /> how <span className="text-cyan-500">PHP is the best</span>
      </h1>
      <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
        I don't understand why people are after Angular and React when PHP is still the OG of
        web development. I've been building a lot of things, from small experiments to full-blown
        web applications, each project showcases my love for coding and design.
      </p>

      <div className="mt-20 max-w-3xl mx-auto">
        {events.map((event, index) => (
          <a
            key={index}
            href={event.videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-20 relative justify-start items-start group"
          >
            <div className="w-full md:w-48 h-40 rounded-lg overflow-hidden flex-shrink-0 mb-4 md:mb-0">
              <Image
                src={event.imageUrl}
                alt={event.title}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex flex-row space-x-4 mb-4 relative">
                  <div className="w-[2px] h-full bg-zinc-800 absolute left-0"></div>
                  <p className="text-zinc-500 text-sm">{event.platform}</p>
                </div>
                <h4 className="font-bold text-base md:text-xl tracking-tight text-zinc-300 mb-2">
                  {event.title}
                </h4>
                <p className="text-zinc-400 text-sm">{event.description}</p>
                <p className="text-zinc-600 group-hover:text-cyan-500 transition duration-200 text-sm mt-2 inline-block">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    className="inline-block mb-[2px]"
                    height="1em"
                    width="1em"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"></path>
                  </svg>{" "}
                  <span>Watch Video</span>
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

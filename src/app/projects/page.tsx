import Image from 'next/image';
import Link from 'next/link';

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
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
  },
  {
    title: "Box Shadows",
    description: "Copy and paste beautiful box shadows that stand out for your next project.",
    image: "https://ext.same-assets.com/1817166502/849522504.png",
    link: "https://manuarora.in/boxshadows"
  },
  {
    title: "PlaceholderTech",
    description: "Your one-stop shop for web app needs tailored to your requirements.",
    image: "https://ext.same-assets.com/3999696764/849522504.png",
    link: "https://placeholdertech.in"
  }
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-10 md:mt-20 relative">
      <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
        I've been building a <span className="text-cyan-500">lot of things</span>
      </h1>
      <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
        Come explore the fruits of my labor, from small experiments to full-blown web
        applications, each project showcases my love for coding and design.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-800/30 rounded-lg overflow-hidden border border-zinc-700/50 project-card"
          >
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
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mr-2"
                  >
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
  );
}

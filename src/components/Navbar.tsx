import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contributions', label: 'Contributions' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/events', label: 'Events' },
];

export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between sm:justify-between py-8 max-w-5xl mx-auto relative z-[100] px-8">
      <div className="hidden lg:flex w-full justify-between">
        <div className="flex flex-row space-x-8 items-center antialiased border px-4 py-2 rounded-2xl border-zinc-700/60 bg-zinc-800">
          <Link href="/" className="font-bold text-sm flex items-center justify-center text-white space-x-2">
            <div className="flex items-center">
              <Image src="https://ext.same-assets.com/4004845542/849522504.png" alt="Tyler Durden" width={32} height={32} className="rounded-full" />
              <span className="font-inter font-bold ml-2">Tyler Durden</span>
            </div>
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm relative"
            >
              <span className="relative z-10 px-2 py-2 inline-block">
                {link.label}
              </span>
            </Link>
          ))}
        </div>
        <a
          href="/cv.pdf"
          target="_blank"
          className="font-medium text-white inline-flex items-center justify-center rounded-[10px] bg-gradient-to-b from-[#464d55] to-[#25292e] text-sm px-4 py-2 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80"
        >
          Download CV
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden w-full">
        <div className="flex flex-row justify-between items-center w-full">
          <Link href="/" className="font-bold text-sm flex items-center justify-center text-white space-x-2 text-zinc-100">
            <div className="flex items-center">
              <Image src="https://ext.same-assets.com/4004845542/849522504.png" alt="Tyler Durden" width={32} height={32} className="rounded-full" />
              <span className="font-inter font-bold ml-2 text-zinc-100">Tyler Durden</span>
            </div>
          </Link>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-zinc-100"
            height="1em"
            width="1em"
          >
            <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

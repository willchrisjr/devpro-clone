export default function BuyNowBanner() {
  return (
    <div className="bg-zinc-800 flex py-2">
      <div className="max-w-4xl mx-auto">
        <a
          href="https://aceternity.lemonsqueezy.com/checkout/buy/f72cfb2a-7598-4e4e-8ef2-1f68c91d9414"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 flex flex-row space-x-1 items-center text-sm"
        >
          <span>Buy now!</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            className="inline-block"
            height="1em"
            width="1em"
          >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

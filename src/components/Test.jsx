import Image from "next/image";
const Card0 = () => {
  return (
    <div className="mx-auto max-w-sm px-4 py-4 w-full border-2 dark:bg-[#18181b] dark:border-[#27272a] bg-slate-50 rounded-2xl shadow-lg">
      <div id="header" className="flex justify-between items-center">
        <Image
          src="/logo1.png"
          alt="img"
          width={50}
          height={50}
          className="rounded-full"
        />
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M12 6h.01M12 12h.01M12 18h.01"
          />
        </svg>
      </div>
      <p
        id="title"
        className="multi-truncate font-bold line-clamp-3 text-[20px] mt-2 break-words cursor-pointer text-gray-500 dark:text-[#c6c6c6]"
      >
        Why you should try Next.js framework
      </p>
      <div id="tags" className="flex justify-start flex-wrap gap-2 mt-2">
        <span className="text-gray-500 dark:text-[#c6c6c6] text-[14px] font-semibold rounded-full border bg-green-500/80 px-2 py-1">
          #nextjs
        </span>
        <span className="text-gray-500 dark:text-[#c6c6c6] text-[14px] font-semibold rounded-full border bg-orange-500/80 px-2 py-1">
          #tailwind
        </span>
        <span className="text-gray-500 dark:text-[#c6c6c6] text-[14px] font-semibold rounded-full border bg-blue-500/80 px-2 py-1">
          #taids
        </span>
      </div>
      <div
        id="info"
        className="flex justify-start flex-wrap gap-2 mt-2 items-center"
      >
        <span className="text-gray-400 text-[14px] font-semibold">May 28</span>
        <span
          id="dot-divider"
          className="h-[4px] w-[4px] rounded-full bg-gray-500"
        ></span>
        <span className="text-gray-400 text-[14px] font-semibold">
          5m read time
        </span>
      </div>
      <div className="h-[200px] w-full rounded-xl bg-green-500/50 my-3 overflow-hidden relative">
        <Image
          src="/images/nextjs_graph.png"
          alt="img"
          fill
          className="object-cover"
        />
      </div>
      <div
        id="actions"
        className="flex justify-between items-center text-gray-400"
      >
        <div className="flex gap-2 items-center w-fit border px-2 py-1 rounded-xl cursor-pointer font-bold">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z"
              clip-rule="evenodd"
            />
          </svg>
          <p>785</p>
        </div>
        <div className="flex gap-2 items-center w-fit border px-2 py-1 rounded-xl cursor-pointer font-bold">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z"
              clip-rule="evenodd"
            />
          </svg>
          <p>34</p>
        </div>
        <div className="flex gap-2 items-center w-fit border px-2 py-1 rounded-xl cursor-pointer font-bold">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
            />
          </svg>
          <p>785</p>
        </div>
        <div className="flex gap-2 items-center w-fit border px-2 py-1 rounded-xl cursor-pointer font-bold">
          <svg
            className="w-6 h-6 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
            />
          </svg>
          <p>785</p>
        </div>
      </div>
    </div>
  );
};

export default Card0;

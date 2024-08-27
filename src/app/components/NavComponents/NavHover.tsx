import React from 'react'

const NavHover = () => {
  return (
    <div>
        <div className="m-1 hs-dropdown [--trigger:hover] relative inline-flex">
  <a id="hs-dropdown-hover-event" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold  text-white shadow-sm hover:bg-gray-900 hover:text-red-600 hover:rounded-xl hover:border-b-4 hover:border-red-600  focus:outline-none  disabled:pointer-events-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    INFO GAME
    <svg className="hs-dropdown-open:rotate-180 size-4 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </a>

  <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-5 space-y-1 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
    <a className="flex items-center gap-x-3.5 py-2 px-3 uppercase rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
      Agen
    </a>
    <a className="flex items-center gap-x-3.5 py-2 px-3 uppercase rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
      Peta
    </a>
    <a className="flex items-center gap-x-3.5 py-2 px-3 uppercase rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
      gudang senjata
    </a>
    <a className="flex items-center gap-x-3.5 py-2 px-3 uppercase rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
      premier
    </a>
  </div>
</div>
    </div>
  )
}

export default NavHover
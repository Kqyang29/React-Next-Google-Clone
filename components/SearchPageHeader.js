import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react";
import { XMarkIcon, MagnifyingGlassIcon, MicrophoneIcon } from '@heroicons/react/24/solid';
import AvatarTool from "./AvatarTool";
import SearchHeaderOption from "./SearchHeaderOption";


function SearchPageHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const searchValue = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://th.bing.com/th/id/R.6ab7b3a86ad578a5009ae29369718612?rik=idvvK0ewpJq0qw&pid=ImgRaw&r=0"
          alt="Logo"
          width={120}
          height={40}
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />

        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">

          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search"
            className="flex-grow w-full focus:outline-none"
          />

          <XMarkIcon
            onClick={() => { searchInputRef.current.value = "" }}
            className="h-5 text-gray-500 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-gray-700 "
          />

          <MicrophoneIcon
            className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"
          />

          <MagnifyingGlassIcon
            className="h-6 hidden sm:inline-flex text-blue-500"
          />

          <button
            type="submit"
            className="hidden"
            onClick={searchValue}
          >
            Submit
          </button>
        </form>

        <AvatarTool
          className="ml-auto"
          url="https://th.bing.com/th/id/OIP.ceEMq9-nUE3hwOlL3ke0xQHaHa?w=149&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        />
      </div>

      {/* SearchHeaderOption */}
      <SearchHeaderOption />
    </header>
  )
}

export default SearchPageHeader

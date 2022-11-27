import Image from "next/image"
import { MagnifyingGlassIcon, MicrophoneIcon } from '@heroicons/react/24/solid';
import { useRef } from "react";
import { useRouter } from "next/router";

function Body() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const searchValue = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  }


  return (
    <form className="flex flex-col items-center mt-44  flex-grow">
      <Image
        src="https://th.bing.com/th/id/R.6ab7b3a86ad578a5009ae29369718612?rik=idvvK0ewpJq0qw&pid=ImgRaw&r=0"
        alt="Logo"
        width={300}
        height={100}
      />
      <div className="flex items-center px-5 py-3 mt-5 hover:shadow-lg rounded-full border border-gray-200 w-full max-w-md focus-within:shadow-lg sm:max-w-xl lg:max-w-2xl">
        <MagnifyingGlassIcon
          className="h-5 mr-3 text-gray-500"
        />

        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search"
          className="p-2 focus:outline-none max-2xl flex-grow"
        />

        <MicrophoneIcon
          className="h-5 mr-3 text-gray-500"
        />
      </div>

      <div className="flex flex-col space-y-2 justify-center mt-8 sm:flex-row sm:space-y-0 sm:space-x-4 ">
        <button
          className="btn"
          onClick={searchValue}
        >
          Google Search
        </button>

        <button
          className="btn"
          onClick={searchValue}
        >
          I’m Feeling Lucky
        </button>

      </div>
    </form>
  )
}

export default Body

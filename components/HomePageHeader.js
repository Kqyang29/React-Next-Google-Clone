import AvatarTool from "./AvatarTool";
import { Squares2X2Icon } from '@heroicons/react/24/solid';


function HomePageHeader() {
  return (
    <header className="flex w-full p-5 justify-between text-sm text-gray-700">
      {/* left */}
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>

      </div>

      {/* right */}
      <div className="flex space-x-4 items-center">

        <p className="link">Gmail</p>
        <p className="link">Images</p>

        {/* Icon */}
        <Squares2X2Icon
          className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
        />

        {/* Avatar */}
        <AvatarTool url="https://th.bing.com/th/id/OIP.ceEMq9-nUE3hwOlL3ke0xQHaHa?w=149&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
      </div>

    </header>
  )
}

export default HomePageHeader;

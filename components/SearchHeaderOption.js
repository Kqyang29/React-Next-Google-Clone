import HeaderOptions from "./HeaderOptions"
import { EllipsisVerticalIcon, NewspaperIcon, PlayIcon, PhotoIcon, MapIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';


function SearchHeaderOption() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      {/* left */}
      <div className="flex space-x-6 ">
        <HeaderOptions Icon={MagnifyingGlassIcon} title="All" selected />
        <HeaderOptions Icon={PhotoIcon} title="Images" />
        <HeaderOptions Icon={PlayIcon} title="Videos" />
        <HeaderOptions Icon={NewspaperIcon} title="News" />
        <HeaderOptions Icon={MapIcon} title="Maps" />
        <HeaderOptions Icon={EllipsisVerticalIcon} title="More" />

      </div>

      {/* right */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  )
}

export default SearchHeaderOption

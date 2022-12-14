import { GlobeAltIcon } from '@heroicons/react/24/solid';

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">

      <div className="px-8 py-3">

        <p className=''>United Kingdom</p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 px-8 py-3 grid-flow-row-dense">
        <div className='flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2'>
          <GlobeAltIcon
            className='h-5 mr-1 text-green-700'
          />
          Carbon neutral since 2007
        </div>

        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p className="link">Advertising</p>
          <p className="link">Bussiness</p>
          <p className="link">How Search Works</p>
        </div>

        <div className="flex justify-center space-x-8 md:ml-auto">
          <p className="link">Privacy</p>
          <p className="link">Terms</p>
          <p className="link">Settings</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

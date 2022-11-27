import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

function PaginationButtons() {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;


  return (
    <div className="flex max-w-lg justify-between items-center text-blue-700 mb-10">
      {startIndex >= 10 && (
        <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
          <div className="flex flex-col items-center flex-grow cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p >
              Previous
            </p>
          </div>
        </Link>
      )}


      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-col items-center flex-grow cursor-pointer hover:underline">
          <p>
            Next
          </p>
          <ChevronRightIcon className="h-5" />
        </div>
      </Link>

    </div>
  )
}

export default PaginationButtons

import Head from "next/head"
import { useRouter } from "next/router";
import SearchPageHeader from "../components/SearchPageHeader";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";
import GoogleResponse from '../GoogleResponse';

function Search({ results }) {
  console.log(results);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Result</title>
      </Head>

      {/* Header */}
      <SearchPageHeader />

      {/* Search Results*/}
      <SearchResults results={results} />
    </div>
  )
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || '0';

  const data = useDummyData
    ? GoogleResponse
    : await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then(res => res.json());

  // pass return props to client side
  return {
    props: {
      results: data,
    }
  }
}

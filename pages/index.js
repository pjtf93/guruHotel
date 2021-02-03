import Head from 'next/head';
import RecentlyView from '../components/RecentlyView';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Guru Finder</title>
        <meta
          name="description"
          content="Find and review the best places around you"
        />
      </Head>
      <SearchBar />
      <RecentlyView />
    </>
  );
}

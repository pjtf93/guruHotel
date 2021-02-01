import Head from 'next/head';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <Head>
        <title>Guru Finder</title>
        <meta
          name="description"
          content="Find and review the best places around you"
        />
      </Head>
      <SearchBar />
    </>
  );
}

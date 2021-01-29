import Head from 'next/head';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundColor: 'red',
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <SearchBar />
        </div>
      </div>
    </>
  );
}

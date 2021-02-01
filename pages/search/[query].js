import Head from 'next/head';
import NavBar from '../../components/NavBar';
import ResultList from '../../components/ResultList';
import fetchItems from '../../lib/fetchItems';

const Results = ({ data }) => {
  return (
    <>
      <Head>
        <title>Guru Finder</title>
        <meta
          name="description"
          content="Find and review the best places around you"
        />
      </Head>
      <NavBar />
      <ResultList data={data} />
    </>
  );
};

export default Results;

export async function getServerSideProps({ query }) {
  const data = await fetchItems(query);

  return {
    props: { data },
  };
}

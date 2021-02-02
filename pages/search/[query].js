import Head from 'next/head';
import NavBar from '../../components/NavBar';
import ResultList from '../../components/ResultList';
import fetchItems from '../../lib/fetchItems';
import { store } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { setData, selectAllItems } from '../../features/items/itemsSlice';
import { useEffect } from 'react';

const Results = ({ data }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(data));
  }, []);

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

export async function getServerSideProps({ store, query }) {
  const data = await fetchItems(query);

  return {
    props: { data },
  };
}

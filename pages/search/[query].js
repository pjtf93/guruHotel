import NavBar from '../../components/NavBar';
import ResultList from '../../components/ResultList';
import fetchItems from '../../lib/fetchItems';

const Results = ({ data }) => {
  return (
    <>
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

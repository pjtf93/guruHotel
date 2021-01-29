import React from 'react';
import ItemDetails from '../../components/ItemDetails';

import NavBar from '../../components/NavBar';
import ResultList from '../../components/ResultList';

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
  console.log(query);
  const API_KEY = process.env.API_KEY;
  const searchQuery = `query{search(term: "burrito", location: "Miami", limit: 2) {
        business {
          id
          photos
          name
          location {
            address1
            address2
            address3
            city
            state
            postal_code
            country
            formatted_address
          }
          review_count
          rating
          display_phone
          reviews(limit:15) {
            
            id
            rating
            user {
              id
            }
            text
            time_created
            
          }
          price   
          hours {
            hours_type
            is_open_now
            open{
              start
              end
              day
              is_overnight
            }
          }
          
          is_closed
        }
      }}
      `;
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY} `,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `${searchQuery}`,
    }),
  };

  const response = await fetch('https://api.yelp.com/v3/graphql', options);
  const data = await response.json();

  return {
    props: { data: data.data.search.business },
  };
}

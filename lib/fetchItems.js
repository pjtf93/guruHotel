const fetchItems = async (query) => {
  const API_KEY = process.env.API_KEY;
  const location = query?.location ? query.location : 'miami';
  const itemQuery = query?.query;

  const searchQuery = `query{search(term:"${itemQuery}", location:"${location}", limit: 10) {
        business {
          id
          photos
          name
          location {
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
              image_url
              name
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

  return data.data.search.business;
};

export default fetchItems;

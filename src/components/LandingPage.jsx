import React from 'react';
import { useGetPostDataQuery } from '../services/serviceAPIs';

const LandingPage = () => {
  const { data, error, isLoading } = useGetPostDataQuery('getPostData');

  return (
    <div>
      <p>Landing page</p>

      {isLoading && <p>Loading...</p>}

      {!isLoading &&  data.map((item) => (
        <ul key={item?.id} style={{listStyleType:'none'}}>
          <li >{item?.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default LandingPage;

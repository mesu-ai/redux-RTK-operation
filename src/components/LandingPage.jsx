import React from 'react';
import { useAddPostDataMutation, useDeletePostDataMutation, useGetPostDataQuery, useUpdatePostDataMutation } from '../services/serviceAPIs';

const LandingPage = () => {
  const { data,isLoading } = useGetPostDataQuery();
  // eslint-disable-next-line no-undef
  const [addPostData]=useAddPostDataMutation();
  const [updatePostData]=useUpdatePostDataMutation();
  const [deletePostData]=useDeletePostDataMutation();

  const handleAdd=async ()=>{
    console.log('add data');

    const addData={
      id: 101,
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    const response= await addPostData(addData);
    console.log(response);


  }

  const handleUpdate=async (id)=>{
    console.log({id});

    const updateData={
      id: 101,
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    const response= await addPostData(updateData);
    console.log(response);


  }

  const handleDelete= async(id)=>{
    console.log({id})
    const response=await deletePostData(id);
    console.log(response);

  }
  

  

  return (
    <div>
      <h2>Redux RTK query Crud Opperation</h2>
      <hr />

      {isLoading && <p>Loading...</p>}

      <button onClick={()=>handleAdd()} type='button'>Add New Data</button>

      <div style={{ textAlign: 'start' }}>
        {!isLoading &&
          data.map((item) => (
            <ul
              key={item?.id}
              style={{ listStyleType: 'none' }}
            >
              <li>{item?.title}</li>
              <button onClick={()=>handleUpdate(item?.id)} type='button'>Update</button>
              <button onClick={()=>handleDelete(item?.id)} type='button'>Delete</button>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default LandingPage;

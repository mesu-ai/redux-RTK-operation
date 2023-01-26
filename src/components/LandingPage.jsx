import React, { useState } from 'react';
import { useAddPostDataMutation, useDeletePostDataMutation, useGetPostDataQuery, useGetSinglePostDataQuery, useUpdatePostDataMutation } from '../services/serviceAPIs';

const LandingPage = () => {
  const [dataId,setDataId]=useState('');
  
  
  const { data,isLoading } = useGetPostDataQuery();
 
  const {data:singleData}=useGetSinglePostDataQuery(dataId,{skip: !dataId});
 
  const [addPostData]=useAddPostDataMutation();
  const [updatePostData]=useUpdatePostDataMutation();
  const [deletePostData]=useDeletePostDataMutation();


  const handleDetails=async(id)=>{
    setDataId(id);
    console.log(singleData);

  }

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
      id: id,
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    const response= await updatePostData(updateData);
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
              <button onClick={()=>handleDetails(item?.id)} type='button'>Details</button>
              <button onClick={()=>handleUpdate(item?.id)} type='button'>Update</button>
              <button onClick={()=>handleDelete(item?.id)} type='button'>Delete</button>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default LandingPage;

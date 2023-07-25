import {useNavigate} from "react-router-dom";
import Layout from "../layout/Layout";
import {useState} from "react";

const Income = () => {
  const navigaion = useNavigate();
  const handleClick = () => {
    navigaion("/expense");
  };

  return (
    <Layout>
      <div className='flex items-center justify-center h-[90vh] text-center'>
        <h1 className='text-3xl font-semibold'>Now You Are Income Page</h1>
      </div>
    </Layout>
  );
};

export default Income;

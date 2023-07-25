import {useNavigate} from "react-router-dom";
import Layout from "../layout/Layout";

const Income = () => {
  const navigaion = useNavigate();
  const handleClick = () => {
    navigaion("/expense");
  };
  return (
    <Layout>
      <div className='mt-10 text-center'>
        <h1 className='text-3xl font-semibold'>Now You Are Income Page</h1>
      </div>
      <div className='flex flex-col items-center justify-center h-[80vh]'>
        <button onClick={handleClick} className='px-3 py-3 border border-purple-400'>
          Go to The Expense Page
        </button>
      </div>
    </Layout>
  );
};

export default Income;

import {useNavigate} from "react-router-dom";
import Layout from "../layout/Layout";

const Expense = () => {
  const navigaion = useNavigate();
  const handleClick = () => {
    navigaion("/");
  };
  return (
    <Layout>
      <div className='mt-10 text-center'>
        <h1 className='text-3xl font-semibold'>Now You Are Expense Page</h1>
      </div>
      <div className='flex flex-col items-center justify-center h-[80vh]'>
        <button onClick={handleClick} className='px-3 py-3 border border-purple-400'>
          Go to The Income Page
        </button>
      </div>
    </Layout>
  );
};

export default Expense;

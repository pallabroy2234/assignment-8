import {useNavigate} from "react-router-dom";
import Layout from "../layout/Layout";

const Expense = () => {
  const navigaion = useNavigate();
  const handleClick = () => {
    navigaion("/");
  };
  return (
    <Layout>
      <div className='flex items-center justify-center h-[90vh] text-center'>
        <h1 className='text-3xl font-semibold'>Now You Are Expense Page</h1>
      </div>
    </Layout>
  );
};

export default Expense;

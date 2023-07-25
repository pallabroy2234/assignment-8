import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className='shadow navbar bg-base-100'>
        <div className='flex-1'>
          <a className='text-xl normal-case btn btn-ghost'>Navbar</a>
        </div>
        <div className='flex-none'>
          <ul className='px-1 menu menu-horizontal'>
            <li>
              <Link to={"/"}>Income</Link>
            </li>
            <li>
              <Link to={"/expense"}>Expense</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

import {NavLink} from "react-router-dom";

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
              <NavLink to={"/"}>Income</NavLink>
            </li>
            <li>
              <NavLink to={"/expense"}>Expense</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';

function Navbar() {
  return (
    <div className='bg-slate-900'>
      <div className="navbar bg-base-100 bg-slate-300">
        <div className="flex-1">
          <span className="text-2xl text-slate-700">Sigma Store</span>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered bg-slate-200 w-full max-w-xs"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

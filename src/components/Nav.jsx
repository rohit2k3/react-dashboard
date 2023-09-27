import React from "react";
import logo from "../assets/logo.png";
import {BiTrendingUp} from 'react-icons/bi'
import {RxDashboard} from 'react-icons/rx'
import {AiOutlineSetting} from 'react-icons/ai'

const Nav = () => {
  return (
    <div>
      <div className="flex flex-col items-center m-2 p-4">
        <img src={logo} />
        <div className="text-left">
            <label className="flex items-center mt-8 m-2 text-bold font-semibold px-5 py-2"><BiTrendingUp className="mx-2"/> Reports</label>
            <label className="flex items-center m-2 bg-blue-100 rounded-lg px-5 py-2 text-blue-800 font-semibold"><RxDashboard className="mx-2"/>Dashboard</label>
            <label className="flex items-center m-2 font-semibold px-5 py-2"><AiOutlineSetting className="mx-2"/> Setting</label>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Nav;

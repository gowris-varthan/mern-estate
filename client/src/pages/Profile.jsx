import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const {currentUser} = useSelector((state)=>state.user)
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center m-7">Profile</h1>
      <form className='flex flex-col gap-4'>
        <h2 className="self-center mt-2">{currentUser.username}</h2>
        <input type="text" placeholder="username" id="username" className="boarder p-3 rounded lg" />
        <input type="email" placeholder="email" id="email" className="boarder p-3 rounded lg" />
        <input type="password" placeholder="password" className="boarder p-3 rounded lg" />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">Update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>

      </div>
    </div>
  );
}

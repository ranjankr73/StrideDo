import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

// Custom Avatar component
const CustomAvatar = ({ name }) => {
  // Here you can use an image or initials for the avatar.
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
  return (
    <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold">
      {initials}
    </div>
  );
};

export const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center py-4 px-8 bg-gradient-to-r from-blue-500 to-indigo-600 fixed w-full top-0 left-0 z-20 shadow-lg">
      {/* Logo */}
      <h1 className="text-3xl text-white font-semibold">Taskyte</h1>

      {/* Avatar and Dropdown */}
      <div
        className="flex justify-center items-center gap-2 hover:cursor-pointer hover:text-white transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CustomAvatar name="Ranjan Kumar" /> {/* Custom Avatar */}
        <h3 className="text-lg text-white">{`Ranjan`}</h3>
        {isOpen ? <IoIosArrowUp className="text-white" /> : <IoIosArrowDown className="text-white" />}
      </div>

      {/* Dropdown Menu (optional) */}
      {isOpen && (
        <div className="absolute top-16 right-10 bg-white shadow-md rounded-lg w-40 py-2 z-30">
          <ul className="text-gray-700">
            <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Profile</li>
            <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Settings</li>
            <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

import React from "react";
import { AiFillApple } from "react-icons/ai";
import { GrGooglePlay } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Button({ icon, text, fetchPerson }) {
  if (icon === "apple") {
    return (
      <Link
        to="/downloads"
        className="bg-teal-500 text-teal-100 rounded flex items-center px-3 py-1 mt-2 inline-block"
      >
        <h1 className="mr-2">{text}</h1>
        <AiFillApple></AiFillApple>
      </Link>
    );
  }
  if (icon === "none") {
    return (
      <button
        className="bg-teal-500 text-teal-100 rounded flex items-center px-3 py-1 mt-2"
        onClick={fetchPerson}
      >
        <h1 className="mr-2">{text}</h1>
      </button>
    );
  }
  if (icon === "google") {
    return (
      <Link
        to="/downloads"
        className="border-teal-500 border-2 hover:bg-teal-500 hover:text-teal-100 text-teal-500 rounded flex items-center px-3 py-1 mt-2 inline-block"
      >
        <h1 className="mr-2">{text}</h1>
        <GrGooglePlay className="text-teal-500"></GrGooglePlay>
      </Link>
    );
  }
}

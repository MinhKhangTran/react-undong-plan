import React from "react";

export default function Card({ icons, text }) {
  return (
    <div className="bg-teal-500 inline-block text-center md:text-4xl text-2xl font-mono tracking-wider text-teal-100 py-2 rounded-xl">
      <div className="flex justify-center">
        <h1 className="md:text-6xl text-4xl py-2">{icons}</h1>
      </div>
      <h1>{text}</h1>
    </div>
  );
}

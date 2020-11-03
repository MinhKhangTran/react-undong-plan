import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="bg-teal-200 h-screen w-screen grid place-items-center">
      <div className="text-center">
        <h1 className="text-5xl text-teal-500 font-mono">
          Fehler. Diese Seite ist nicht vorhanden
        </h1>
        <button className="border-teal-500 border-4 rounded-full px-3 py-1 mt-4 hover:bg-teal-500 hover:text-teal-100 transition transition-all duration-700 ease-in-out">
          <Link to="/">Zurück zur Homepage</Link>
        </button>
      </div>
    </section>
  );
}

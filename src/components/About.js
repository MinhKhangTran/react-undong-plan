import React from "react";
import { about } from "../assets/data";
import Button from "./Button";
export default function About() {
  return (
    <section
      className="w-11/12 md:w-2/3 h-screen mx-auto grid place-items-center my-8"
      id="about"
    >
      {about.map((item, index) => {
        const { img, desc } = item;
        return (
          <article key={index} className="flex flex-col md:flex-row ">
            <div className="flex-grow md:mr-4">
              <img className="rounded-xl" src={img} alt="frau mit handy" />
            </div>
            <div className="md:w-1/2 md:ml-4 text-lg tracking-wide w-full">
              <p>{desc}</p>
              <Button icon="none" text="Read More"></Button>
            </div>
          </article>
        );
      })}
    </section>
  );
}

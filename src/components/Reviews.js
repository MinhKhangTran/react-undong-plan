import React from "react";
import { url } from "../assets/data";
import Button from "./Button";
const defaultImg = "https://randomuser.me/api/portraits/men/75.jpg";
const defaultName = "Brad Gibson";
const defaultCountry = "USA";

export default function Reviews() {
  const [loading, setLoading] = React.useState(false);
  const [person, setPerson] = React.useState(null);

  const fetchPerson = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    // console.log(data.results[0]);
    const person = data.results[0];
    const { first, last } = person.name;
    const { country } = person.location;
    const { large } = person.picture;
    const newPerson = { name: `${first} ${last}`, country, img: large };
    setPerson(newPerson);
    setLoading(false);
  };
  React.useEffect(() => {
    fetchPerson();
  }, []);

  return (
    <article
      className="w-11/12 md:w-2/3 mx-auto grid place-items-center h-screen "
      id="reviews"
    >
      <div className="flex flex-col items-center p-8 w-full bg-teal-400 rounded-xl border-8 border-teal-500">
        <h1 className="mb-4 text-4xl italic text-teal-100">
          Unsere Bewertungen!
        </h1>
        <div className="h-48 w-48">
          <img
            className="h-full w-full rounded-full"
            src={(person && person.img) || defaultImg}
            alt={(person && person.name) || defaultName}
          />
        </div>
        <h1 className="text-3xl text-teal-100">
          {(person && person.name) || defaultName}
        </h1>
        <h2 className="text-2xl text-teal-200">
          {(person && person.country) || defaultCountry}
        </h2>
        <p className="text-teal-100 p-4 text-lg tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          alias modi quod ut odit voluptatem totam quaerat similique voluptas,
          reiciendis fugit in rem aliquam cum?
        </p>
        <Button
          icon="none"
          text={`${
            loading
              ? "Einen kurzen Moment bitte..."
              : "Eine andere Bewertung lesen!"
          }`}
          fetchPerson={fetchPerson}
        ></Button>
      </div>
    </article>
  );
}

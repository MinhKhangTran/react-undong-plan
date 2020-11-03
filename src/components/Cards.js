import React from "react";
import { cards } from "../assets/data";
import Card from "./Card";

export default function Cards() {
  return (
    <section className="w-11/12 md:w-2/3 mx-auto grid md:grid-cols-3 grid-cols-1 gap-4 my-8">
      {cards.map((card) => {
        return <Card key={card.id} {...card}></Card>;
      })}
    </section>
  );
}

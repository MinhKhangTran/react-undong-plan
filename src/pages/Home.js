import React from "react";
import {
  Navbar,
  Reviews,
  Slider,
  Footer,
  About,
  Cards,
  Cta,
} from "../components";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Slider></Slider>

      <About></About>
      <Cards></Cards>
      <Reviews></Reviews>
      <Cta></Cta>
      <Footer></Footer>
    </>
  );
}

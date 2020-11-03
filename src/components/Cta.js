import React from "react";
import Button from "./Button";

export default function Cta() {
  return (
    <div className="bg-teal-200">
      <h1 className="text-center my-2">Jetzt herunterladen!</h1>
      <div className="flex justify-around pb-4 w-1/4 mx-auto">
        <Button className="" icon="apple" text="Download"></Button>
        <Button className="" icon="google" text="Download"></Button>
      </div>
    </div>
  );
}

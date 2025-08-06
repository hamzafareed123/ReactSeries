import React, { useContext } from "react";
import Subject from "./Subject";
import { Data } from "./ContextData";

function Student() {
  const data = useContext(Data);
  return (
    <>
      <h1 className="ml3 bg-red-300 text-3xl px-30 py-10 "> Student Component </h1>

      <Subject />
    </>
  );
}

export default Student;

import React from "react";

function MapFuncion() {
  const users = [
    {
      name: "Ali",
      age: 33,
      email: "ali@gmail.com",
      id: 1,
    },
    {
      name: "Sara",
      age: 27,
      email: "sara.khan@yahoo.com",
      id: 2,
    },
    {
      name: "Usman",
      age: 29,
      email: "usman.dev@outlook.com",
      id: 3,
    },
    {
      name: "Fatima",
      age: 24,
      email: "fatima.zee@gmail.com",
      id: 4,
    },
    {
      name: "Hamza",
      age: 31,
      email: "hamza.engineer@gmail.com",
      id: 5,
    },
    {
      name: "Ayesha",
      age: 28,
      email: "ayesha.xo@hotmail.com",
      id: 6,
    },
    {
      name: "Bilal",
      age: 35,
      email: "bilal123@gmail.com",
      id: 7,
    },
    {
      name: "Zainab",
      age: 30,
      email: "zainab.data@gmail.com",
      id: 8,
    },
    {
      name: "Tariq",
      age: 26,
      email: "tariq.dev@protonmail.com",
      id: 9,
    },
    {
      name: "Maha",
      age: 22,
      email: "maha.codes@gmail.com",
      id: 10,
    },
  ];

  return (
    <>
      <div className="ml-80 mt-10 text-3xl font-bold">MapFuncion</div>

      <table border="1" className=" ml-80 mt-10">
        <thead>
          <tr className="border border-black">
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>email</th>
          </tr>
        </thead>

        <tbody className="border border-black">
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default MapFuncion;

import React from "react";
import logo from "./logo.svg";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";

function App() {
  const users = [
    {
      id: 1,
      name: "Maris",
      email: "sss@mail.com",
      address: {
        city: "Daugavpils",
        street: "18.novembra",
        zipcode: "LV12321",
      },
    },
    {
      id: 2,
      name: "Dantes",
      email: "ddd@mail.com",
      address: {
        city: "Daugavpils",
        street: "Tautas",
        zipcode: "LV12321",
      },
    },
  ];
  return (
    <div className="App">
      <Card
        onClick={(num) => console.log("click", num)}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>Button</button>
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;

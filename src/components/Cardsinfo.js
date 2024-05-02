import React from "react";
import Fullpage from "./Fullpage";
import Jsonfile from "./Jsonfile";

function CreateCard(data) {
  return (
    <Fullpage
      key={data.key}
      designation={data.designation}
      fee={data.fee}
      name={data.name}
      age={data.age}
      location={data.location}
      bio={data.bio}
      lastDate={data.lastDate}
      profile={data.profile}
    />
  );
}

function Cardsinfo() {
  return <div className="flex">{Jsonfile.map(CreateCard)}</div>;
}

export default Cardsinfo
